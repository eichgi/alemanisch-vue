<template>
    <section class="hero is-primary is-fullheight">
        <div class="hero-head">
            <nav class="navbar">
                <div class="container">
                    <div class="navbar-start">
                        <router-link class="navbar-item" to="/ejercicios" tag="a">Ejercicios</router-link>
                    </div>
                    <div class="navbar-end">
                        <router-link class="navbar-item" to="/login" tag="a" v-if="!auth">Acceder</router-link>
                        <router-link class="navbar-item" to="/perfil" tag="a" v-else>Mi cuenta</router-link>
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
                </div>
            </div>
        </div>
    </section>
</template>
<style scoped>
    html, body {
        font-family: 'Open Sans', serif;
    }

    .hero.is-primary {
        background: linear-gradient(
                rgba(0, 0, 0, 0.1),
                rgba(0, 0, 0, 0.3) /*), url('https://unsplash.it/1200/900?random') no-repeat center center fixed;*/
        ), url('../../assets/background.jpg') no-repeat center center fixed;
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

    a.navbar-item {
        background: none !important;
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