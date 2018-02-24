<template>
    <div id="section-editor">
        <form id="new-post" v-on:submit.prevent="publish">
            <div class="field">
                <div class="control">
                    <label>Titulo:</label>
                    <input class="input" type="text" v-model="post.title">
                </div>
            </div>
            <div class="field">
                <div class="control">
                    <label>Contenido:</label>
                    <ckeditor v-model="post.contenido" :config="config"/>
                </div>
            </div>
            <div class="has-text-centered" style="margin-top: 1em">
                <input type="submit" value="Publicar" class="button is-primary is-medium">
            </div>
        </form>
    </div>
</template>

<script>
    import Axios from './../../axios'
    import Ckeditor from 'vue-ckeditor2'
    import swal from 'sweetalert2'

    export default {
        name: "editor",
        beforeRouteUpdate(to, from, next) {
            if (to.params.id) {
                this.post.id = to.params.id;
                this.getPost();
                this.post._method = 'PUT';
                this.route = '/posts/' + this.post.id;
            } else
                this.clearPost();
            next();
        },
        created() {
            if (this.$route.params.id) {
                this.post.id = this.$route.params.id;
                this.getPost();
                this.post._method = 'PUT';
                this.route = '/posts/' + this.post.id;
            }
        },
        data: () => {
            return {
                post: {
                    id: null,
                    title: '',
                    contenido: '',
                    _method: 'POST',
                },
                route: '/posts',
                config: {
                    toolbar: [
                        {
                            name: 'document',
                            items: ['Source', '-', 'Preview', '-', 'Templates']
                        },
                        {
                            name: 'clipboard',
                            items: ['Cut', 'Copy', 'Paste', 'PasteText', 'PasteFromWord', '-', 'Undo', 'Redo']
                        },
                        {name: 'editing', items: ['Find', 'Replace', '-', 'SelectAll', '-', 'Scayt']},
                        {
                            name: 'forms',
                            items: ['Form', 'Checkbox', 'Radio', 'TextField', 'Textarea', 'Select', 'Button', 'ImageButton', 'HiddenField']
                        },
                        '/',
                        {
                            name: 'basicstyles',
                            items: ['Bold', 'Italic', 'Underline', 'Strike', 'Subscript', 'Superscript', '-', 'CopyFormatting', 'RemoveFormat']
                        },
                        {
                            name: 'paragraph',
                            items: ['NumberedList', 'BulletedList', '-', 'Outdent', 'Indent', '-', 'Blockquote', 'CreateDiv', '-', 'JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock', '-', 'BidiLtr', 'BidiRtl']
                        },
                        {name: 'links', items: ['Link', 'Unlink', 'Anchor']},
                        {
                            name: 'insert',
                            items: ['Image', 'Table', 'HorizontalRule', 'Smiley', 'SpecialChar', 'PageBreak', 'Iframe']
                        },
                        '/',
                        {name: 'styles', items: ['Styles', 'Format', 'Font', 'FontSize']},
                        {name: 'colors', items: ['TextColor', 'BGColor']},
                        {name: 'tools', items: ['Maximize', 'ShowBlocks']},
                        {name: 'about', items: ['About']}
                    ],
                    height: 300
                },
            }
        },
        components: {
            Ckeditor,
        },
        methods: {
            publish() {
                if (this.validatePost()) {
                    Axios
                        .post(this.route, this.post)
                        .then((res) => {
                            console.log(res);
                            if (res.data.status) {
                                swal({
                                    title: res.data.message,
                                    type: 'success',
                                });
                            }
                        })
                        .catch((error) => {
                            console.log(error);
                        });
                } else {
                    swal({
                        title: 'Datos incorrectos',
                        text: 'Debes llenar todos los campos',
                        type: 'error',
                    });
                }
            },
            getPost() {
                Axios.get('/posts/' + this.post.id)
                    .then((res) => {
                        console.log(res);
                        this.post.title = res.data.post.title;
                        this.post.contenido = res.data.post.content;
                    });
            },
            clearPost() {
                for (let value in this.post) {
                    this.post[value] = '';
                }
            },
            validatePost() {
                return (this.post.title !== null && this.post.contenido !== null);
            },
        }
    }
</script>

<style scoped>

</style>