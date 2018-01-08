<template>
    <nav class="navbar is-primary" v-show="$route.path !== '/'">
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
                <div class="navbar-item has-dropdown is-hoverable">
                    <router-link class="navbar-link" tag="a" to="/ejercicios">Ejercicios</router-link>
                    <div class="navbar-dropdown">
                        <router-link class="navbar-item" to="/pronombres/nominativos">
                            Pronombres <!--<span class="tag is-success">Nuevo</span>-->
                        </router-link>
                        <router-link class="navbar-item" to="/verbos">
                            Verbos &nbsp;&nbsp;<span class="tag is-success">Nuevo</span>
                        </router-link>
                        <hr class="navbar-divider">
                        <router-link class="navbar-item" to="/">
                            Sustantivos &nbsp;&nbsp;<span class="tag is-warning">Proximamente</span>
                        </router-link>
                        <router-link class="navbar-item" to="/">
                            Conjugador &nbsp;&nbsp;<span class="tag is-warning">Proximamente</span>
                        </router-link>
                    </div>
                </div>
            </div>

            <div class="navbar-end">
                <router-link class="navbar-item" to="/login" v-if="!auth">
                    Iniciar sesión
                </router-link>
                <a class="navbar-item has-dropdown is-hoverable" v-if="auth">
                    <a class="navbar-link">Opciones</a>
                    <div class="navbar-dropdown">
                        <router-link class="navbar-item" to="/perfil">
                            Mi cuenta
                        </router-link>
                        <router-link class="navbar-item" to="/logout">
                            Cerrar sesión
                        </router-link>
                    </div>
                </a>
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
        watch: {
            '$route'(to, from){

            }
        }
    }
</script>
















