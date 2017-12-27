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
                                    <input class="input is-large" type="email" v-model="email" placeholder="Your Email"
                                           autofocus="">
                                </div>
                            </div>

                            <div class="field">
                                <div class="control">
                                    <input class="input is-large" type="password" v-model="password"
                                           placeholder="Your Password">
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
                        <a href="/registro">Registro</a> <!--&nbsp;·&nbsp;
                        <a href="../">Forgot Password</a> &nbsp;·&nbsp;
                        <a href="../">Need Help?</a>-->
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>
<style>
    html, body {
        /*font-family: 'Open Sans', serif;*/
        /*font-size: 14px;
        font-weight: 300;*/
    }

    .hero.is-success {
        background: #F2F6FA;
    }

    .hero .nav, .hero.is-success .nav {
        -webkit-box-shadow: none;
        box-shadow: none;
    }

    .box {
        /* margin-top: 5rem;*/
    }

    .avatar {
        margin-top: -70px;
        padding-bottom: 20px;
    }

    .avatar img {
        padding: 5px;
        background: #fff;
        border-radius: 50%;
        -webkit-box-shadow: 0 2px 3px rgba(10, 10, 10, .1), 0 0 0 1px rgba(10, 10, 10, .1);
        box-shadow: 0 2px 3px rgba(10, 10, 10, .1), 0 0 0 1px rgba(10, 10, 10, .1);
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

    export default{
        data(){
            return {
                email: 'hiramg90@gmail.com',
                password: '123456'
            }
        },
        computed: {
            status(){
                let status = this.$store.getters.respuesta;
                this.lanzarModal(status);
            }
        },
        methods: {
            login(){
                const formData = {
                    email: this.email,
                    password: this.password
                };
                swal.showLoading();
                this.$store.dispatch('login', formData);
            },
            lanzarModal(status){
                console.log('>>> ' + status);
                if (status) {
                    swal({
                        title: status,
                        text: 'Redirigiendo...',
                        timer: 1200,
                        onOpen: () => {
                            swal.showLoading()
                        }
                    }).then((result) => {
                        if (result.dismiss === 'timer') {
                            router.push({path: '/'});
                        }
                    })
                }
            },
        },
    }
</script>
