<template>
    <div class="container">
        <br>
        <div class="columns">
            <div class="column is-3 is-hidden-touch">
                <aside class="menu">
                    <p class="menu-label">General</p>
                    <ul class="menu-list">
                        <li><a class="is-active">Perfil</a></li>
                    </ul>
                    <p class="menu-label">Historial de ejercicios</p>
                    <ul class="menu-list">
                        <li><a href="#pronombres">Pronombres</a></li>
                        <li><a href="#verbos">Verbos</a></li>
                        <li><a>Artículos</a></li>
                        <li><a>Sustantivos</a></li>
                    </ul>
                </aside>
            </div>
            <div class="column is-size-12-tablet is-size-9-desktop">
                <div class="box has-text-centered">
                    <figure class="avatar">
                        <img :src="avatar">
                    </figure>
                    <h1 class="title">
                        Hola, {{nombre}}
                    </h1>
                    <p>{{email}}</p>
                    <p>Eres miembro desde {{fechaRegistro}}</p>
                </div>
                <br>
                <h1 class="title">Historial de Ejercicios</h1>
                <hr>
                <div class="box">
                    <div class="tile is-ancestor">
                        <div class="tile is-12 is-vertical is-parent">
                            <div class="tile is-child notification is-danger" v-if="historial.length == 0">
                                <p class="title">No has realizado ningún ejercicio</p>
                                <p class="subtitle">Ve al menú Ejercicios y elige uno para empezar!</p>
                            </div>
                            <div :id="index" class="tile is-child box" v-for="(record, index) in historial">
                                <p class="title">{{index}}</p>
                                <tabla :historial="record"></tabla>
                            </div>
                        </div>
                    </div>
                </div>
                <br>
            </div>
        </div>
    </div>
</template>
<style scoped>
  .notification {
    display: none;
  }
</style>
<script>
    import Tabla from './categoria.vue';
    import swal from 'sweetalert2';
    import Axios from './../../axios';
    import moment from './../../moment';

    export default{
        created(){
            swal({
                title: 'Cargando perfil...',
                onOpen: () => {
                    swal.showLoading()
                }
            });
            this.getRecord();
        },
        data(){
            return {
                avatar: 'https://placeimg.com/200/200/any',
                historial: [],
            }
        },
        computed: {
            nombre(){
                return this.$store.getters.usuario.name;
            },
            email(){
                return this.$store.getters.usuario.email;
            },
            fechaRegistro(){
                let fecha = this.$store.getters.usuario.created_at;
                return moment(fecha).format('ll');
            }
        },
        components: {tabla: Tabla},
        methods: {
            getRecord(){
                let usuario_id = this.$store.getters.usuario.id;
                Axios.post('/getRecord', {usuario_id})
                    .then(res => {
                        console.log(res);
                        //this.historial = res.data.record;
                        this.historial = res.data.categories;
                        swal.close();
                    });
            }
        },
    }
</script>











