<template>
    <section class="hero is-success is-fullheight">
        <div class="hero-body">
            <div class="container">
                <div class="column is-8 is-offset-2">
                    <h3 class="title has-text-grey has-text-centered">Contacto</h3>
                    <p class="subtitle has-text-grey has-text-centered">Llena el siguiente formulario</p>
                    <div class="box">
                        <form @submit.prevent="enviar">
                            <div class="field">
                                <label class="label">Nombre</label>
                                <div class="control">
                                    <input class="input" type="text" v-model="form.name" required>
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
                                    <select class="input" v-model="subject" @change="changeSubject" required>
                                        <option disabled value="">Selecciona una opción</option>
                                        <option :value="index" v-for="(subject, index) in subjects">{{subject}}
                                        </option>
                                    </select>
                                </div>
                            </div>
                            <div class="field">
                                <label class="label">Mensaje</label>
                                <div class="control">
                                    <textarea class="textarea" rows="3" v-model="form.message" required></textarea>
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
    import Axios from './../../axios';
    import swal from 'sweetalert2';

    export default{
        data(){
            return {
                form: {
                    id: null,
                    name: null,
                    email: null,
                    subject: null,
                    message: null,
                },
                subject: '',
                subjects: [
                    'Error gramatical en un ejercicio',
                    'Typo en el sitio',
                    'Dudas y/o conflictos',
                    'Sugerencias',
                ],
            }
        },
        methods: {
            enviar(){
                swal({
                    title: 'Enviando...',
                    onOpen: () => {
                        swal.showLoading();
                    },
                });
                Axios.post('/contacto', this.form)
                    .then(res => {
                        if (res.status === 200) {
                            swal({
                                title: res.data.message,
                                type: 'success'
                            });
                        }
                        this.cleanForm();
                    })
                    .catch(error => {
                        swal({
                            title: 'Ocurrio un problema',
                            text: 'Intenta de nuevo más tarde',
                            type: 'error',
                        });
                        this.cleanForm();
                    });
            },
            changeSubject(){
                this.form.subject = this.subjects[this.subject];
            },
            cleanForm(){
                for (let key in this.form) {
                    this.form[key] = null;
                }
            },
        }
    }
</script>
