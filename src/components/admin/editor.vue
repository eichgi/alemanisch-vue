<template>
    <div id="section-editor">
        <form id="new-post" v-on:submit.prevent="publish">
            <div class="field">
                <div class="control">
                    <label>Titulo:</label>
                    <input class="input" type="text" v-model="newPost.title">
                </div>
            </div>
            <div class="field">
                <div class="control">
                    <label>Contenido:</label>
                    <ckeditor v-model="newPost.contenido" :config="config"/>
                </div>
            </div>
            <div class="has-text-centered" style="margin-top: 1em">
                <input type="submit" value="Publicar" class="button is-primary is-medium">
            </div>
        </form>
    </div>
</template>

<script>
    import Ckeditor from 'vue-ckeditor2'

    export default {
        name: "editor",
        data: () => {
            return {
                newPost: {
                    title: '',
                    contenido: '',
                },
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
                            items: ['NumberedList', 'BulletedList', '-', 'Outdent', 'Indent', '-', 'Blockquote', 'CreateDiv', '-', 'JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock', '-', 'BidiLtr', 'BidiRtl', 'Language']
                        },
                        {name: 'links', items: ['Link', 'Unlink', 'Anchor']},
                        {
                            name: 'insert',
                            items: ['Image', 'Flash', 'Table', 'HorizontalRule', 'Smiley', 'SpecialChar', 'PageBreak', 'Iframe']
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
                Axios
                    .post('/posts', this.newPost)
                    .then((res) => {
                        console.log(res);
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            },
        }
    }
</script>

<style scoped>

</style>