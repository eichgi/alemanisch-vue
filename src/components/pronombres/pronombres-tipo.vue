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
                                    <li>Revisa la
                                        <button class="button is-primary is-small" @click="mostrarGuia">guía
                                        </button>
                                        cuantas veces sea necesario.
                                    </li>
                                    <li>Llena los campos con el pronombre correcto</li>
                                    <li>Una vez completados oprime el botón de "Terminar"</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                    <br>
                    <informacion :descripcion="descripcion" :enlace="enlace"></informacion>
                </div>
                <div class="column is-half">
                    <div class="card">
                        <header class="card-header">
                            <p class="card-header-title">
                                Pronombres personales {{tipo}}
                            </p>
                        </header>
                        <div class="card-content">
                            <div class="content">
                                <!--<div class="field is-horizontal">
                                    <div class="field-label is-normal">
                                        <label class="label">Yo</label>
                                    </div>
                                    <div class="field-body">
                                        <div class="field">
                                            <div class="control">
                                                <input class="input is-success"
                                                       type="text">
                                            </div>
                                        </div>
                                    </div>
                                </div>-->
                                <template v-for="pronombre in pronombres">
                                    <pronombre :pronombre="pronombre"
                                               v-on:actualizar="actualizarRespuesta"></pronombre>
                                </template>
                            </div>
                        </div>
                        <footer class="card-footer">
                            <a href=# class="card-footer-item" @click.prevent="validar">Terminar</a>
                        </footer>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import Axios from './../../axios';
    import PronombreInput from './pronombre-input.vue';
    import Informacion from './informacion.vue';
    import swal from 'sweetalert2';
    import router from './../../router';

    export default {
        created(){

        },
        mounted: function () {
            this.obtenerPronombres();
        },
        components: {
            'pronombre': PronombreInput,
            'informacion': Informacion,
        },
        data(){
            return {
                pronombres: [],
                respuesta: {},
                tipo: this.$route.params.tipo,
                descripcion: '',
                enlace: '',
            }
        },
        methods: {
            obtenerPronombres()
            {
                this.loading();
                this.pronombres = [];
                Axios.get('/pronombres/' + this.tipo)
                    .then(res => {
                        console.log(res);
                        this.pronombres = res.data.data.pronombres;
                        this.descripcion = res.data.data.descripcion;
                        this.enlace = res.data.data.enlace;
                        this.$store.dispatch('setEjercicioId', res.data.data.ejercicio_id);
                        swal.close();
                        this.asignarRespuesta();
                    });
            },
            actualizarRespuesta(value){
                console.log(value);
                this.respuesta[value] = true;
            },
            validar(){
                let isValid = true;
                for (let elem in this.respuesta) {
                    if (!this.respuesta[elem]) {
                        isValid = false;
                    }
                }
                if (isValid) {
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
                            this.obtenerPronombres();
                            // result.dismiss can be 'cancel', 'overlay',
                            // 'close', and 'timer'
                        } else if (result.dismiss === 'cancel') {
                            router.push({path: '/pronombres'});
                        }
                    });
                } else {
                    swal(
                        '',
                        'Revisa tus respuestas',
                        'error'
                    );
                }
            },
            mostrarGuia(){
                let html = `<h5><i>Pronombres Personales Nominativos</i></h5>
                            <table class="table is-striped is-fullwidth">
                                <thead>
                                    <tr>
                                        <th>Español</th>
                                        <th>Alemán</th>
                                    </tr>
                                </thead>
                                <tbody>`;
                let pros = Array.from(this.pronombres);
                pros.forEach((elem) => {
                    html += `<tr>`;
                    html += `<td>${elem.pronombre.capitalize()}</td>`;
                    html += `<td>${elem.pronomen.capitalize()}</td>`;
                    html += `</tr>`;
                });
                html += `</tbody></table>`;
                swal({
                    html: html
                });
            },
            asignarRespuesta(){
                this.respuesta = {};
                this.pronombres.forEach((elem, index) => {
                    this.respuesta[elem['pronombre']] = false;
                });
            },
            loading(){
                swal({
                    title: 'Cargando...',
                    timer: 1500,
                    onOpen: () => {
                        swal.showLoading()
                    }
                })
            }
        },
        watch: {
            '$route'(to, from){
                this.tipo = to.params.tipo;
                this.obtenerPronombres();
            }
        }
    }
</script>