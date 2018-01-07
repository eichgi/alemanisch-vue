<template xmlns:v-on="http://www.w3.org/1999/xhtml">
    <section class="hero is-success is-fullheight">
        <div class="hero-body">
            <div class="container has-text-centered">
                <div class="column is-6 is-offset-3">
                    <h3 class="title has-text-grey">Acceso</h3>
                    <p class="subtitle has-text-grey">Ingresa tus datos</p>
                    <div class="box">
                        <form v-on:submit.prevent="login">
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
                            <div class="field">
                                <div class="control">
                                    <button type="submit" class="button is-block is-info is-large" @click="login">
                                        Entrar
                                    </button>
                                </div>
                            </div>
                            <!--<a class="button is-block is-info is-large" @click="login">Entrar</a>-->
                        </form>
                        <p class="has-text-success" v-if="status">{{status}}</p>
                    </div>
                    <p class="has-text-grey">
                        <router-link to="/registro">Registro</router-link>
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
