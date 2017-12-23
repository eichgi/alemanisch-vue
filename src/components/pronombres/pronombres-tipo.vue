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
                    <!--<div class="card">
                        <header class="card-header">
                            <p class="card-header-title">
                                Información
                            </p>
                        </header>
                        <div class="card-content">
                            <div class="content">
                                <p>Los pronombres personales en Nominativo es una de las primeras cosas que hay
                                    aprender en alemán, dado que son básicos para realizar nuestras primeras
                                    oraciones.</p>

                                <p>Puedes encontrar más información en el siguiente enlace:
                                    https://www.alemansencillo.com/pronombres-en-aleman</p>
                            </div>
                        </div>
                    </div>-->
                    <informacion :descripcion="descripcion"></informacion>
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
<style>
</style>
<script>
    import Axios from 'axios';
    import PronombreInput from './pronombre-input.vue';
    import Informacion from './informacion.vue';
    import swal from 'sweetalert2';

    export default {
        created(){
            //console.log(this.$route.params.tipo);
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
            }
        },
        methods: {
            obtenerPronombres()
            {
                swal.showLoading();
                this.pronombres = [];
                //Axios.get('http://germanisch.test/api/pronombres/' + this.tipo)
                Axios.get('http://104.236.246.206/api/pronombres/' + this.tipo)
                    .then(res => {
                        this.pronombres = res.data.data.pronombres;
                        this.descripcion = res.data.data.descripcion;
                        swal.close();
                        this.aisnarRespuesta();
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
                    swal(
                        '',
                        'Ejercicio terminado',
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
            aisnarRespuesta(){
                this.pronombres.forEach((elem, index) => {
                    this.respuesta[elem['pronombre']] = false;
                });
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