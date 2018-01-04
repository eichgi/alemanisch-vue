<template xmlns:v-on="http://www.w3.org/1999/xhtml">
    <section class="hero is-success is-fullheight">
        <div class="hero-body">
            <div class="container has-text-centered">
                <div class="column is-6 is-offset-3">
                    <h3 class="title has-text-grey">Registro</h3>
                    <div class="box">
                        <form v-on:submit.prevent="signUp">
                            <div class="field">
                                <div class="control">
                                    <input class="input is-large" v-model="nombre" type="email" placeholder="Nombre"
                                           autofocus="">
                                </div>
                            </div>
                            <div class="field">
                                <div class="control">
                                    <input class="input is-large" v-model="email" type="email" placeholder="Email"
                                           autofocus="">
                                </div>
                            </div>
                            <div class="field">
                                <div class="control">
                                    <input class="input is-large" v-model="password" type="password"
                                           placeholder="Password">
                                </div>
                            </div>
                            <!--<a class="button is-block is-info is-large" @click="signUp">Registrarme</a>-->
                            <div class="field">
                                <div class="control">
                                    <button type="submit" class="button is-block is-info is-large" @click="signUp">
                                        Registrarme
                                    </button>
                                </div>
                            </div>
                        </form>
                        <p class="has-text-success" v-if="status">{{status}}</p>
                    </div>
                    <p class="has-text-grey">
                        <router-link to="/login">Iniciar sesión</router-link>
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>
<style scoped>
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

    button {
        width: 100%;
    }
</style>
<script>
    import swal from 'sweetalert2';
    import router from './../../router';
    import store from './../../store';

    export default{
        beforeCreate(){
            store.commit('storeRespuesta', {});
        },
        data(){
            return {
                nombre: '',
                email: '',
                password: '',
            }
        },
        computed: {
            status(){
                let respuesta = this.$store.getters.respuesta;
                this.lanzarModal(respuesta);
                return respuesta.mensaje;
            }
        },
        methods: {
            signUp(){
                const formData = {
                    email: this.email,
                    password: this.password,
                    nombre: this.nombre,
                };
                this.$store.dispatch('signUp', formData);
            },
            lanzarModal(respuesta){
                console.log(respuesta);
                if (respuesta.status === 200) {
                    swal({
                        title: respuesta.mensaje,
                        text: 'Redirigiendo...',
                        timer: 1500,
                        onOpen: () => {
                            swal.showLoading()
                        }
                    }).then((result) => {
                        if (result.dismiss === 'timer') {
                            router.push({path: '/login'});
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
