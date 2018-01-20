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
                                    <li>Elige un verbo</li>
                                    <table class="table is-striped">
                                        <tr v-for="verb in verbs">
                                            <td @click="loadPronouns(verb.id, $event)">
                                                {{verb.verbo}} - {{verb.verb}}
                                                <span class="is-pulled-right">
                                                    <i class="fa fa-circle-thin"></i>
                                                </span>
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
<style>
    .active {
        background: #209cee;
        color: #FFF;
    }

    .is-selected {
        background: #209cee;
        color: snow;
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
        },
        data(){
            return {
                categoria: this.$route.params.categoria,
                level: 1,
                levels: 0,
                verbs: [],
                pronouns: [],
                pronounsResponse: {},
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
            loadVerbs(){
                Axios.get(`/verbos/${this.categoria}/${this.level}`)
                    .then(res => {
                        console.log(res);
                        this.verbs = res.data.verbos;
                    });
            },
            loadPronouns(id, event){
                Axios.get('/conjugador/' + id)
                    .then(res => {
                        console.log(res);
                        this.pronouns = res.data.verbos;
                        this.assignResponse();
                    });
                let elem = event.target;
                document.querySelectorAll('td').forEach((elem) => {
                    elem.classList.remove('active');
                });
                elem.classList.add('active');
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
                    swal(
                        '',
                        'Bien hexo',
                        'success'
                    );
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
                document.querySelectorAll('.nivel').forEach((elem) => {
                    elem.classList.remove('is-selected');
                });
                event.target.classList.add('is-selected');
            },
        }
    }
</script>
