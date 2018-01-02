<template>
    <nav class="navbar is-primary">
        <div class="navbar-brand">
            <router-link class="navbar-item" to="/" tag="a"><b>Alemannisch!</b></router-link>
            <div class="navbar-burger burger" data-target="navMenuColordark-example">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
        <div id="navMenuColordark-example" class="navbar-menu">
            <div class="navbar-start">
                <!--<router-link class="navbar-item" to="/">Inicio</router-link>-->
                <div class="navbar-item has-dropdown is-hoverable">
                    <a href="#" class="navbar-link">Ejercicios</a>
                    <div class="navbar-dropdown">
                        <router-link class="navbar-item" to="/pronombres/nominativos">
                            Pronombres <span class="tag is-success">Nuevo</span>
                        </router-link>
                        <hr class="navbar-divider">
                        <router-link class="navbar-item" to="/verbos">
                            Verbos &nbsp;&nbsp;<span class="tag is-info">En construcción</span>
                        </router-link>
                        <router-link class="navbar-item" to="/">
                            Articulos &nbsp;&nbsp;<span class="tag is-warning">Proximamente</span>
                        </router-link>
                        <router-link class="navbar-item" to="/">
                            Sustantivos &nbsp;&nbsp;<span class="tag is-warning">Proximamente</span>
                        </router-link>
                    </div>
                </div>
                <!--<router-link class="navbar-item has-dropdown is-hoverable" to="/pronombres">
                    <a class="navbar-link">Pronombres</a>
                    <div class="navbar-dropdown">
                        &lt;!&ndash;<router-link class="navbar-item" to="/pronombres/personales">Personales</router-link>&ndash;&gt;
                        <router-link class="navbar-item" to="/pronombres/nominativos">Personales</router-link>
                        &lt;!&ndash;<a class="navbar-item" href="/documentation/overview/start/">
                            Personales
                        </a>&ndash;&gt;
                        <a class="navbar-item" href="https://bulma.io/documentation/modifiers/syntax/">
                            Posesivos
                        </a>
                        <a class="navbar-item" href="https://bulma.io/documentation/columns/basics/">
                            Reflexivos
                        </a>
                        <a class="navbar-item" href="https://bulma.io/documentation/layout/container/">
                            Otros
                        </a>
                    </div>
                </router-link>-->
            </div>

            <div class="navbar-end">
                <router-link class="navbar-item" to="/login" v-if="!auth">
                    Iniciar sesión
                </router-link>
                <a class="navbar-item has-dropdown is-hoverable" v-if="auth">
                    <a class="navbar-link">Opciones</a>
                    <div class="navbar-dropdown">
                        <router-link class="navbar-item" to="/perfil">
                            Perfil
                        </router-link>
                        <router-link class="navbar-item" to="/logout">
                            Cerrar sesión
                        </router-link>
                    </div>
                </a>
                <!--<router-link class="navbar-item has-dropdown is-hoverable" to="/pronombres">
                    <a class="navbar-link">Opciones</a>
                    <div class="navbar-dropdown">
                        <router-link class="navbar-item" to="/perfil">
                            Perfil
                        </router-link>
                        <router-link class="navbar-item" to="/perfil">
                            Cerrar sesión
                        </router-link>
                    </div>
                </router-link>-->
                <!--<div class="navbar-item">
                    <div class="field is-grouped">
                        <p class="control">
                            <a class="bd-tw-button button" data-social-network="Twitter" data-social-action="tweet"
                               data-social-target="http://localhost:4000" target="_blank"
                               href="https://twitter.com/intent/tweet?text=Bulma: a modern CSS framework based on Flexbox&amp;hashtags=bulmaio&amp;url=http://localhost:4000&amp;via=jgthms">
                                <span class="icon">
                                    <i class="fa fa-twitter"></i>
                                </span>
                                <span>
                                  Tweet
                                </span>
                            </a>
                        </p>
                        <p class="control">
                            <a class="button is-primary" href="https://github.com/jgthms/bulma/archive/0.5.1.zip">
                                <span class="icon">
                                  <i class="fa fa-download"></i>
                                </span>
                                <span>Download</span>
                            </a>
                        </p>
                    </div>
                </div>-->
            </div>
        </div>
    </nav>
</template>
<script>
    export default {
        data(){
            return {
                showNav: false,
            }
        },
        computed: {
            auth(){
                return this.$store.getters.estaAutenticado;
            }
        },
        methods: {
            ocultarMenu(){
                this.showNav = false;
            }
        }
    }
</script>
















