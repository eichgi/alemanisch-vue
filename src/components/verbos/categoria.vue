<template>
    <div class="section">
        <div class="container">
            <div class="columns">
                <div class="column is-4">
                    <div class="card">
                        <header class="card-header">
                            <p class="card-header-title">
                                Niveles
                            </p>
                        </header>
                        <div class="card-content">
                            <div class="content">
                                <div class="buttons has-addons is-centered">
                                    <span class="button nivel" @click="cambiarNivel(index+1, $event)"
                                          v-for="(nivel, index) in niveles" :class="index==0 ? 'is-selected' : ''">{{index+1}}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br>
                    <div class="card">
                        <header class="card-header">
                            <p class="card-header-title">
                                Instrucciones
                            </p>
                        </header>
                        <div class="card-content">
                            <div class="content">
                                <ul>
                                    <li>Revisa la
                                        <button class="button is-primary is-small" @click="mostrarGuia">guía
                                        </button>
                                        cuantas veces sea necesario.
                                    </li>
                                </ul>
                                <p class="has-text-justified">Todos los verbos regulares alemanes son también verbos
                                    débiles, es decir son verbos
                                    que no cambian su raíz en la conjugación.
                                    En la conjugación del verbo en alemán en presente añadimos unas desinencias o
                                    terminaciones a la raíz del verbo para formar su conjugación: wohn–en.
                                    La mayoría de los verbos en alemán se conjugan como el verbo wohnen, pero tambien
                                    hay excepciones.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="column is-8">
                    <table class="table is-striped is-hoverable is-fullwidth">
                        <thead>
                        <tr>
                            <th>Alemán</th>
                            <th>Español</th>
                            <th>Ejemplo</th>
                        </tr>
                        </thead>
                        <tbody>
                        <template v-for="verbo in verbos">
                            <renglon :verbo="verbo" v-on:actualizar="actualizarRespuesta"></renglon>
                        </template>
                        </tbody>
                        <tfoot>
                        <tr>
                            <td colspan="3">
                                <button class="button is-primary is-medium is-fullwidth"
                                        @click="validar">Terminar
                                </button>
                            </td>
                        </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
    .section {
        background: whitesmoke;
    }

    .buttons {
        margin-top: 1.5em;
    }

    .table {
        box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);
    }

    th {
        text-align: center;
    }

    .is-selected {
        background: #209cee;
        color: snow;
    }
</style>
<script>
    import Renglon from './input.vue';
    import Axios from './../../axios';
    import swal from 'sweetalert2';
    import router from './../../router';

    export default{
        beforeRouteUpdate (to, from, next) {
            this.categoria = to.params.categoria;
            this.cargarNiveles();
            this.cargarVerbos();
            next();
        },
        created(){
            this.cargarNiveles();
            this.cargarVerbos();
        },
        data(){
            return {
                verbos: [],
                respuesta: {},
                categoria: this.$route.params.categoria,
                nivel: 1,
                niveles: 0,
            }
        },
        components: {
            renglon: Renglon,
        },
        methods: {
            cargarNiveles(){
                this.loading();
                Axios.get('/verbos/' + this.categoria + '/niveles')
                    .then(res => {
                        this.niveles = res.data.niveles;
                    });
            },
            cargarVerbos(){
                this.verbos = [];
                Axios.get('/verbos/' + this.categoria + '/' + this.nivel)
                    .then(res => {
                        swal.close();
                        this.verbos = res.data.verbos;
                        this.$store.dispatch('setEjercicioId', res.data.ejercicio_id);
                        this.asignarRespuesta();
                    });
            },
            loading(){
                swal({
                    title: 'Cargando...',
                    onOpen: () => {
                        swal.showLoading();
                    }
                })
            },
            actualizarRespuesta(verbo, state){
                this.respuesta[verbo] = state;
            },
            asignarRespuesta(){
                this.respuesta = {};
                this.verbos.forEach((elem, index) => {
                    this.respuesta[elem['verbo']] = false;
                });
            },
            validar(){
                let isValid = true;
                for (let elem in this.respuesta) {
                    if (!this.respuesta[elem]) {
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
                                this.cargarVerbos();
                            } else if (result.dismiss === 'cancel') {
                                router.push({path: '/verbos'});
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
            mostrarGuia(){
                let html = `<h5><i>Verbos Regulares Básicos</i></h5>
                            <table class="table is-striped is-fullwidth">
                                <thead>
                                    <tr>
                                        <th>Español</th>
                                        <th>Alemán</th>
                                    </tr>
                                </thead>
                                <tbody>`;
                let verbos = Array.from(this.verbos);
                verbos.forEach((elem) => {
                    html += `<tr>`;
                    html += `<td>${elem.verbo}</td>`;
                    html += `<td>${elem.verb}</td>`;
                    html += `</tr>`;
                });
                html += `</tbody></table>`;
                swal({
                    html: html
                });
            },
            cambiarNivel(nivel, event){
                this.nivel = nivel;
                this.cargarVerbos();
                document.querySelectorAll('.nivel').forEach((elem) => {
                    elem.classList.remove('is-selected');
                });
                event.target.classList.add('is-selected');
            },
        }
    }
</script>
