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
                        <router-link class="navbar-item" to="/pronombres">
                            Pronombres
                        </router-link>
                        <router-link class="navbar-item" to="/verbos">
                            Verbos
                        </router-link>
                        <router-link class="navbar-item" to="/sustantivos">
                            Sustantivos
                        </router-link>
                        <router-link class="navbar-item" to="/conjugador">
                            Conjugador &nbsp;&nbsp;
                        </router-link>
                    </div>
                </div>
                <router-link class="navbar-item" to="/biblioteca" tag="a">Biblioteca</router-link>
            </div>

            <div class="navbar-end">
                <router-link class="navbar-item" to="/login" v-if="!auth">
                    Acceder
                </router-link>
                <a class="navbar-item has-dropdown is-hoverable" v-if="auth">
                    <a class="navbar-link">Opciones</a>
                    <div class="navbar-dropdown">
                        <router-link class="navbar-item" to="/admin" v-if="auth && isAdmin">
                            Admin
                        </router-link>
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
<style scoped>
    .tabs {
        margin-bottom: 0 !important;
    }
</style>
<script>
    export default {
        data() {
            return {
                showNav: false,
            }
        },
        computed: {
            auth() {
                return this.$store.getters.estaAutenticado;
            },
            isAdmin() {
                return this.$store.getters.esAdministrador;
            }
        },
        watch: {
            '$route'(to, from) {

            }
        }
    }
</script>
















