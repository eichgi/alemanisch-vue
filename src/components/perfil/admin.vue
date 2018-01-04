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
                <div class="tile is-ancestor">
                    <div class="tile is-12 is-vertical is-parent">
                        <div :id="index" class="tile is-child box" v-for="(record, index) in historial">
                            <p class="title">{{index}}</p>
                            <tabla :historial="record"></tabla>
                        </div>
                    </div>
                </div>
                <!--<section class="info-tiles">
                    <div class="tile is-ancestor has-text-centered">
                        <div class="tile is-parent">
                            <article class="tile is-child box">
                                <p class="title">439k</p>
                                <p class="subtitle">Users</p>
                            </article>
                        </div>
                        <div class="tile is-parent">
                            <article class="tile is-child box">
                                <p class="title">59k</p>
                                <p class="subtitle">Products</p>
                            </article>
                        </div>
                        <div class="tile is-parent">
                            <article class="tile is-child box">
                                <p class="title">3.4k</p>
                                <p class="subtitle">Open Orders</p>
                            </article>
                        </div>
                        <div class="tile is-parent">
                            <article class="tile is-child box">
                                <p class="title">19</p>
                                <p class="subtitle">Exceptions</p>
                            </article>
                        </div>
                    </div>
                </section>-->
                <!--<div class="columns">
                    <div class="column is-6">
                        <div class="card events-card">
                            <header class="card-header">
                                <p class="card-header-title">
                                    Events
                                </p>
                                <a href="#" class="card-header-icon" aria-label="more options">
                                    <span class="icon">
                                      <i class="fa fa-angle-down" aria-hidden="true"></i>
                                    </span>
                                </a>
                            </header>
                            <div class="card-table">
                                <div class="content">
                                    <table class="table is-fullwidth is-striped">
                                        <tbody>
                                        <tr>
                                            <td width="5%"><i class="fa fa-bell-o"></i></td>
                                            <td>Lorum ipsum dolem aire</td>
                                            <td><a class="button is-small is-primary" href="#">Action</a></td>
                                        </tr>
                                        <tr>
                                            <td width="5%"><i class="fa fa-bell-o"></i></td>
                                            <td>Lorum ipsum dolem aire</td>
                                            <td><a class="button is-small is-primary" href="#">Action</a></td>
                                        </tr>
                                        <tr>
                                            <td width="5%"><i class="fa fa-bell-o"></i></td>
                                            <td>Lorum ipsum dolem aire</td>
                                            <td><a class="button is-small is-primary" href="#">Action</a></td>
                                        </tr>
                                        <tr>
                                            <td width="5%"><i class="fa fa-bell-o"></i></td>
                                            <td>Lorum ipsum dolem aire</td>
                                            <td><a class="button is-small is-primary" href="#">Action</a></td>
                                        </tr>
                                        <tr>
                                            <td width="5%"><i class="fa fa-bell-o"></i></td>
                                            <td>Lorum ipsum dolem aire</td>
                                            <td><a class="button is-small is-primary" href="#">Action</a></td>
                                        </tr>
                                        <tr>
                                            <td width="5%"><i class="fa fa-bell-o"></i></td>
                                            <td>Lorum ipsum dolem aire</td>
                                            <td><a class="button is-small is-primary" href="#">Action</a></td>
                                        </tr>
                                        <tr>
                                            <td width="5%"><i class="fa fa-bell-o"></i></td>
                                            <td>Lorum ipsum dolem aire</td>
                                            <td><a class="button is-small is-primary" href="#">Action</a></td>
                                        </tr>
                                        <tr>
                                            <td width="5%"><i class="fa fa-bell-o"></i></td>
                                            <td>Lorum ipsum dolem aire</td>
                                            <td><a class="button is-small is-primary" href="#">Action</a></td>
                                        </tr>
                                        <tr>
                                            <td width="5%"><i class="fa fa-bell-o"></i></td>
                                            <td>Lorum ipsum dolem aire</td>
                                            <td><a class="button is-small is-primary" href="#">Action</a></td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <footer class="card-footer">
                                <a href="#" class="card-footer-item">View All</a>
                            </footer>
                        </div>
                    </div>
                    <div class="column is-6">
                        <div class="card">
                            <header class="card-header">
                                <p class="card-header-title">
                                    Inventory Search
                                </p>
                                <a href="#" class="card-header-icon" aria-label="more options">
                  <span class="icon">
                    <i class="fa fa-angle-down" aria-hidden="true"></i>
                  </span>
                                </a>
                            </header>
                            <div class="card-content">
                                <div class="content">
                                    <div class="control has-icons-left has-icons-right">
                                        <input class="input is-large" type="text" placeholder="">
                                        <span class="icon is-medium is-left">
                      <i class="fa fa-search"></i>
                    </span>
                                        <span class="icon is-medium is-right">
                      <i class="fa fa-check"></i>
                    </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card">
                            <header class="card-header">
                                <p class="card-header-title">
                                    User Search
                                </p>
                                <a href="#" class="card-header-icon" aria-label="more options">
                  <span class="icon">
                    <i class="fa fa-angle-down" aria-hidden="true"></i>
                  </span>
                                </a>
                            </header>
                            <div class="card-content">
                                <div class="content">
                                    <div class="control has-icons-left has-icons-right">
                                        <input class="input is-large" type="text" placeholder="">
                                        <span class="icon is-medium is-left">
                      <i class="fa fa-search"></i>
                    </span>
                                        <span class="icon is-medium is-right">
                      <i class="fa fa-check"></i>
                    </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>-->
            </div>
        </div>
    </div>
</template>
<style scoped></style>
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
                historial: null,
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











