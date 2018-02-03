<template>
    <div class="section">
        <div class="container">
            <div class="columns">
                <div class="column is-half">
                    <div class="card">
                        <header class="card-header">
                            <p class="card-header-title">
                                Instrucciones
                            </p>
                        </header>
                        <div class="card-content">
                            <div class="content">
                                <ol>
                                    <li>Elige un nivel</li>
                                    <div class="buttons has-addons is-centered">
                                    <span class="button nivel" @click="changeLevel(index+1, $event)"
                                          v-for="(nivel, index) in levels">{{index+1}}
                                    </span>
                                    </div>
                                    <li>Elige un tiempo verbal</li>
                                    <div class="buttons has-addons is-centered">
                                        <span :class="[time.id == 4 ? 'time-selected' : '', 'button', 'button-time']"
                                              v-for="time in times"
                                              @click="(time.id != 3) ? changeTime(time.id, $event) : null"
                                              :disabled="(time.id == 3)">
                                            {{time.nombre}}
                                        </span>
                                    </div>
                                    <li>Elige un verbo</li>
                                    <table class="table is-striped">
                                        <tr v-for="verb in verbs">
                                            <td @click="loadPronouns(verb.id, $event)">
                                                {{verb.verbo}} - {{verb.verb}}
                                            </td>
                                        </tr>
                                    </table>
                                    <li>Llena los campos con la conjugación correcta</li>
                                    <li>Una vez completados oprime el botón de "Terminar"</li>
                                </ol>
                                <ul>
                                    <li>Revisa la
                                        <button class="button is-primary is-small" @click="showGuide">guía
                                        </button>
                                        cuantas veces sea necesario.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <br>
                    <!--<informacion :descripcion="descripcion" :enlace="enlace"></informacion>-->
                </div>
                <div class="column is-half">
                    <div class="card">
                        <header class="card-header">
                            <p class="card-header-title">
                                Pronombres personales
                            </p>
                        </header>
                        <div class="card-content">
                            <div class="content">
                                <template v-for="pronoun in pronouns">
                                    <pronombre-input :pronoun="pronoun"
                                                     v-on:updateResponse="updateResponse"></pronombre-input>
                                </template>
                            </div>
                        </div>
                        <footer class="card-footer">
                            <button class="button is-primary is-medium is-fullwidth"
                                    @click="validate">Terminar
                            </button>
                        </footer>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
    .is-selected {
        background: #209cee !important;
        color: snow;
    }

    .times-selector {
        margin: 1em 3.5em 0;
    }

    .time-selected {
        background: #209cee !important;
        color: snow;
    }

    .buttons {
        margin-top: 1em;
    }
</style>
<script>
    import Axios from './../../axios';
    import Input from './input.vue';
    import swal from 'sweetalert2';

    export default{
        beforeRouteUpdate (to, from, next) {
            this.categoria = to.params.categoria;
            this.pronouns = this.verbs = [];
            this.levels = 0;
            this.loadLevels();
            next();
        },
        created(){
            this.loadLevels();
            this.loadTenses();
        },
        data(){
            return {
                categoria: this.$route.params.categoria,
                level: 1,
                levels: 0,
                verbs: [],
                pronouns: [],
                pronounsResponse: {},
                time: 2,
                times: [],
            }
        },
        components: {
            'pronombre-input': Input,
        },
        methods: {
            loadLevels(){
                Axios.get(`/conjugador/${this.categoria}/niveles`)
                    .then(res => {
                        this.levels = res.data.niveles;
                    });
            },
            loadTenses(){
                Axios.get(`/tenses`)
                    .then(res => {
                        console.log(res);
                        this.times = res.data.tiempos;
                    });
            },
            loadVerbs(){
                Axios.get(`/verbos/${this.categoria}/${this.level}`)
                    .then(res => {
                        console.log(res);
                        this.verbs = res.data.verbos;
                    });
            },
            loadPronouns(id, event){
                this.pronouns = [];
                swal.showLoading();
                Axios
                    .post(`/conjugador/${this.categoria}/${this.level}/${id}`, {
                        time: this.time,
                    })
                    .then(res => {
                        //console.log(res);
                        swal.close();
                        this.pronouns = res.data.verbos;
                        this.$store.dispatch('setEjercicioId', res.data.ejercicio_id);
                        this.assignResponse();
                    });
                let elem = event.target;
                this.clearClass('td', 'is-selected');
                elem.classList.add('is-selected');
            },
            assignResponse(){
                this.pronounsResponse = {};
                this.pronouns.forEach((elem, index) => {
                    this.pronounsResponse[elem['verb']] = false;
                });
            },
            updateResponse(verb, state){
                this.pronounsResponse[verb] = state;
            },
            validate(){
                let isValid = true;
                for (let elem in this.pronounsResponse) {
                    if (!this.pronounsResponse[elem]) {
                        isValid = false;
                    }
                }

                if (isValid) {
                    if (this.$store.getters.estaAutenticado) {
                        this.$store.dispatch('saveExerciseToRecord');
                        swal({
                            title: 'Ejercicio terminado',
                            type: 'success',
                            showCancelButton: true,
                            confirmButtonText: 'Repetir ejercicio',
                            cancelButtonText: 'Regresar al menú',
                            confirmButtonClass: 'button is-primary',
                            cancelButtonClass: 'button is-danger',
                            buttonsStyling: false,
                            reverseButtons: false,
                        }).then((result) => {
                            if (result.value) {
                                this.loadVerbs();
                            } else if (result.dismiss === 'cancel') {
                                router.push({path: '/conjugador'});
                            }
                        });
                    } else {
                        swal({
                            text: "¿Deseas acceder para registrar el ejercicio?",
                            type: 'question',
                            showCancelButton: true,
                            confirmButtonText: 'Acceder',
                            cancelButtonText: 'Después',
                            confirmButtonClass: 'button is-success',
                            cancelButtonClass: 'button is-danger',
                            buttonsStyling: false,
                            reverseButtons: true
                        }).then((result) => {
                            if (result.value) {
                                this.$store.dispatch('saveGuestsExercises');
                                router.push({path: '/login'});
                            } else if (result.dismiss === 'cancel') {
                                router.push({path: '/verbos'});
                            }
                        });
                    }
                } else {
                    swal(
                        '',
                        'Revisa tus respuestas',
                        'error'
                    );
                }
            },
            showGuide(){
                if (!this.verbs.length) {
                    swal({
                        text: 'Debes elegir un nivel',
                        type: 'error',
                    });
                    return false;
                }

                if (!this.pronouns.length) {
                    swal({
                        text: 'Debes elegir un verbo',
                        type: 'error',
                    });
                    return false;
                }

                let html = `<h5><i>Conjugador de verbos ${this.categoria}</i></h5>
                 <table class="table is-striped is-fullwidth">
                 <thead>
                 <tr>
                 <th>Español</th>
                 <th>Alemán</th>
                 </tr>
                 </thead>
                 <tbody>`;
                let nouns = Array.from(this.pronouns);
                nouns.forEach((elem) => {
                    html += `<tr>`;
                    html += `<td>${elem.pronombre} ${elem.verbo}</td>`;
                    html += `<td>${elem.pronomen} ${elem.verb}</td>`;
                    html += `</tr>`;
                });
                html += `</tbody></table>`;
                swal({
                    html: html
                });
            },
            changeLevel(level, event){
                this.level = level;
                this.loadVerbs();
                this.clearClass('.nivel', 'is-selected');
                event.target.classList.add('is-selected');
                this.clearClass('td', 'is-selected');
            },
            changeTime(time_id, event){
                this.time = time_id;
                this.loadVerbs();
                this.clearClass('.button-time', 'time-selected');
                event.target.classList.add('time-selected');
                this.clearClass('td', 'is-selected');
                this.clearPronouns();
            },
            clearClass(elem, clase){
                document.querySelectorAll(elem).forEach((elem) => {
                    elem.classList.remove(clase);
                });
            },
            clearPronouns(){
                this.pronouns = [];
            },
        }
    }
</script>
