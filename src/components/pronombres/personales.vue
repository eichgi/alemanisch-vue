<template>
    <div>
        <div class="tabs is-centered is-toggle is-fullwidth">
            <ul>
                <router-link active-class="is-active" exact tag="li" to="/pronombres/nominativos">
                    <a>
                        <span>Nominativos</span>
                    </a>
                </router-link>
                <router-link active-class="is-active" tag="li" class="" to="/pronombres/acusativos">
                    <a>
                        <span>Acusativos</span>
                    </a>
                </router-link>
                <router-link active-class="is-active" tag="li" class="" to="/pronombres/dativos">
                    <a>
                        <span>Dativos</span>
                    </a>
                </router-link>
            </ul>
        </div>

        <router-view></router-view>
    </div>
</template>
<script>
    export default {
        methods: {}
    }
</script>
<!--<script>
    import Axios from 'axios';
    import PronombreInput from './pronombre-input.vue';
    import Informacion from './informacion.vue';
    import swal from 'sweetalert2';

    export default {
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
                respuesta: {
                    yo: false,
                    tu: false,
                    el: false,
                    ella: false,
                    eso: false,
                    nosotros: false,
                    ustedes: false,
                    ellos: false,
                }
            }
        },
        methods: {
            obtenerPronombres()
            {
                Axios.get('http://germanisch.test/api/pronombres')
                    .then(res => {
                        this.pronombres = res.data.data.pronombres;
                        //console.log(this.pronombres);
                    });
            },
            actualizarRespuesta(value){
                //console.log(value);
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
                    //alert('OK');
                } else {
                    swal(
                        '',
                        'Revisa tus respuestas',
                        'error'
                    );
                    //alert('ERRAR');
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
            }
        }
    }
</script>-->
