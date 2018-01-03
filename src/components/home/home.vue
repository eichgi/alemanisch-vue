<template>
    <section class="hero is-info is-fullheight">
        <!--<div class="hero-head">
           <nav class="navbar">
              <div class="container">
                 <div class="navbar-brand">
                    <a class="navbar-item" href="../">
                       <img src="http://bulma.io/images/bulma-type-white.png" alt="Logo">
                    </a>
                    <span class="navbar-burger burger" data-target="navbarMenu">
                <span></span>
                <span></span>
                <span></span>
              </span>
                 </div>
                 <div id="navbarMenu" class="navbar-menu">
                    <div class="navbar-end">
                       <a class="navbar-item is-active">
                          Home
                       </a>
                       <a class="navbar-item">
                          Examples
                       </a>
                       <a class="navbar-item">
                          Documentation
                       </a>
                       <span class="navbar-item">
                  <a class="button is-white is-outlined is-small" href="https://github.com/dansup/bulma-templates/blob/master/templates/landing.html">
                    <span class="icon">
                      <i class="fa fa-github"></i>
                    </span>
                    <span>View Source</span>
                  </a>
                </span>
                    </div>
                 </div>
              </div>
           </nav>
        </div>-->

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
    <!--<section class="hero is-info is-fullheight">
       <div class="hero-body">
          <div class="container has-text-centered">
             <h1 class="title">
                Bienvenido a Alemannisch
             </h1>
             <h2 class="subtitle">
                Aprende alemán!
             </h2>
          </div>
       </div>
    </section>-->
</template>
<style scoped>
    html, body {
        font-family: 'Open Sans', serif;
    }

    .hero.is-info {
        background: linear-gradient(
                rgba(0, 0, 0, 0.5),
                rgba(0, 0, 0, 0.5)
        ), url('https://unsplash.it/1200/900?random') no-repeat center center fixed;
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
        }
    }
</script>