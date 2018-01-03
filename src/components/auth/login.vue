<template>
    <section class="hero is-success is-fullheight">
        <div class="hero-body">
            <div class="container has-text-centered">
                <div class="column is-4 is-offset-4">
                    <h3 class="title has-text-grey">Acceso</h3>
                    <p class="subtitle has-text-grey">Por favor inicia sesión</p>
                    <div class="box">
                        <!--<figure class="avatar">
                            <img src="https://placehold.it/128x128">
                        </figure>-->
                        <form>
                            <div class="field">
                                <div class="control">
                                    <input class="input is-large" type="email" v-model="email" placeholder="Email"
                                           autofocus="">
                                </div>
                            </div>

                            <div class="field">
                                <div class="control">
                                    <input class="input is-large" type="password" v-model="password"
                                           placeholder="Contraseña">
                                </div>
                            </div>
                            <!--<div class="field">
                                <label class="checkbox">
                                    <input type="checkbox">
                                    Remember me
                                </label>
                            </div>-->
                            <a class="button is-block is-info is-large" @click="login">Entrar</a>
                        </form>
                        <p class="has-text-success" v-if="status">{{status}}</p>
                    </div>
                    <p class="has-text-grey">
                        <router-link to="/registro">Registro</router-link>
                        <!--<a href="/registro">Registro</a> &nbsp;·&nbsp;
                        <a href="../">Forgot Password</a> &nbsp;·&nbsp;
                        <a href="../">Need Help?</a>-->
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>
<style>
    .hero.is-success {
        background: #F2F6FA;
    }

    .hero .nav, .hero.is-success .nav {
        -webkit-box-shadow: none;
        box-shadow: none;
    }

    input {
        font-weight: 300;
    }

    p {
        font-weight: 700;
    }

    p.subtitle {
        padding-top: 1rem;
    }
</style>
<script>
    import router from './../../router';
    import swal from 'sweetalert2'
    import store from './../../store';

    export default{
        beforeCreate(){
            store.commit('storeRespuesta', {});
        },
        created(){

        },
        data()
        {
            return {
                email: '',
                password: '',
            }
        },
        computed: {
            status()
            {
                let respuesta = this.$store.getters.respuesta;
                this.lanzarModal(respuesta);
                return respuesta.mensaje;
            }
        },
        methods: {
            login()
            {
                const formData = {
                    email: this.email,
                    password: this.password
                };
                swal.showLoading();
                this.$store.dispatch('login', formData);
            },
            lanzarModal(respuesta)
            {
                if (respuesta.status === 200) {
                    swal({
                        title: respuesta.mensaje,
                        text: 'Redirigiendo...',
                        timer: 1200,
                        onOpen: () => {
                            swal.showLoading()
                        }
                    }).then((result) => {
                        if (result.dismiss === 'timer') {
                            router.push({path: '/'});
                        }
                    });
                } else if (respuesta.status === 401) {
                    swal({
                        title: respuesta.mensaje
                    });
                }
            },
        },
    }
</script>
