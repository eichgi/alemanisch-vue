<template>
    <section class="hero is-success is-fullheight">
        <div class="hero-body">
            <div class="container">
                <div class="column is-8 is-offset-2">
                    <h3 class="title has-text-grey has-text-centered">Contacto</h3>
                    <p class="subtitle has-text-grey has-text-centered">Llena el siguiente formulario</p>
                    <div class="box">
                        <form @click.prevent="enviar">
                            <div class="field">
                                <label class="label">Nombre</label>
                                <div class="control">
                                    <input class="input" type="email" v-model="form.nombre" required>
                                </div>
                            </div>
                            <div class="field">
                                <label class="label">Email</label>
                                <div class="control">
                                    <input class="input" type="email" v-model="form.email" required>
                                </div>
                            </div>
                            <div class="field">
                                <label class="label">Asunto</label>
                                <div class="control">
                                    <select class="input" v-model="form.asunto" required>
                                        <option value="1">Error gramatical en un ejercicio</option>
                                        <option value="2">Typo en el sitio</option>
                                        <option value="3">Dudas y/o conflictos</option>
                                        <option value="4">Sugerencias</option>
                                    </select>
                                </div>
                            </div>
                            <div class="field">
                                <label class="label">Mensaje</label>
                                <div class="control">
                                    <textarea class="textarea" rows="3" v-model="form.mensaje" required></textarea>
                                </div>
                            </div>
                            <div class="field">
                                <div class="control">
                                    <input type="submit" class="button is-primary is-medium" value="Enviar">
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<style scoped>
    html, body {
        font-family: 'Open Sans', serif;
        font-size: 14px;
        font-weight: 300;
    }

    .hero.is-success {
        background: whitesmoke;
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

    input[type=submit] {
        width: 100%;
    }
</style>
<script>
    import Axios from 'axios';

    export default{
        data(){
            return {
                form: {
                    id: null,
                    nombre: null,
                    email: null,
                    asunto: null,
                    mensaje: null,
                }
            }
        },
        methods: {
            enviar(){
                axios.post('/contacto', this.form)
                    .then(res => {
                        console.log(res.data);
                    })
                    .catch(error => {
                        console.log(error.data);
                    });
            },
        }
    }
</script>
