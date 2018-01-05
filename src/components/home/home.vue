<template>
    <section class="hero is-info is-fullheight">
        <div class="hero-head">
            <nav class="navbar">
                <div class="container">
                    <div class="navbar-start">
                        <!--<div class="navbar-item has-dropdown is-hoverable">
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
                        </div>-->
                    </div>
                    <div class="navbar-end">
                        <router-link class="navbar-item" to="/login" tag="a" v-if="!auth">Acceder</router-link>
                        <router-link class="navbar-item" to="/perfil" tag="a" v-if="auth">Mi cuenta</router-link>
                    </div>
                </div>
            </nav>
        </div>

        <div class="hero-body">
            <div class="container has-text-centered">
                <div class="column is-6 is-offset-3">
                    <h1 class="title">
                        Bienvenido a Alemannisch
                    </h1>
                    <h2 class="subtitle">
                        Aprende alemán practicando!
                    </h2>
                    <!--<div class="box">
                       <div class="field is-grouped">
                          <p class="control is-expanded">
                             <input class="input" type="text" placeholder="Enter your email">
                          </p>
                          <p class="control">
                             <a class="button is-info">
                                Notify Me
                             </a>
                          </p>
                       </div>
                    </div>-->
                </div>
            </div>
        </div>
    </section>
</template>
<style scoped>
    html, body {
        font-family: 'Open Sans', serif;
    }

    .hero.is-info {
        background: linear-gradient(
                rgba(0, 0, 0, 0.1),
                rgba(0, 0, 0, 0.3)
        /*), url('https://unsplash.it/1200/900?random') no-repeat center center fixed;*/
        ), url('./../../assets/background.jpg') no-repeat center center fixed;
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover;
    }

    .hero .nav, .hero.is-success .nav {
        -webkit-box-shadow: none;
        box-shadow: none;
    }

    .hero .subtitle {
        padding: 3rem 0;
        line-height: 1.5;
    }

    nav .navbar {
        display: none;
    }
</style>
<script>
    import swal from 'sweetalert2';

    export default {
        created(){
            if (this.$store.getters.guestsExercises.length) {
                this.$store.dispatch('clearGuestsExercises');
                swal({
                    type: 'success',
                    title: 'Ejercicios registrados',
                    text: 'Puedes ver tu historial de ejercicios en tu perfil'
                });
            }
        },
        computed: {
            auth(){
                return this.$store.getters.estaAutenticado;
            }
        },
    }
</script>