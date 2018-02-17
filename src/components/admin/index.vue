<template>
    <section class="container">
        <div class="columns" style="margin: 2em 0">
            <div class="column is-3">
                <div class="has-text-centered">
                    <button class="button is-link is-fullwidth">Nueva publicación</button>
                </div>
                <aside class="menu" style="margin-top: 1.5em">
                    <p class="menu-label">Listado de publicaciones</p>
                    <ul class="menu-list">
                        <li><a>Pronombres</a></li>
                        <li><a>Verbos</a></li>
                        <li><a>Sustantivos</a></li>
                        <li>
                            <a>Conjugador</a>
                            <ul>
                                <li><a>Presente</a></li>
                                <li><a>Pasado</a></li>
                                <li><a>Futuro</a></li>
                            </ul>
                        </li>
                    </ul>
                </aside>
            </div>
            <div class="column is-9 box">
                <h1>Administrador</h1>
                <form method="post">
                    <editor v-model="content" :init="options"></editor>
                    <div class="has-text-centered" style="margin-top: 1em">
                        <input type="submit" value="Publicar" class="button is-primary">
                    </div>
                </form>
            </div>
        </div>
    </section>

</template>

<script src='https://cloud.tinymce.com/stable/tinymce.min.js'></script>
<script>
    import Editor from '@tinymce/tinymce-vue';

    export default {
        name: "index",
        data: () => {
            return {
                content: null,
                options: {
                    height: 300,
                }
            }
        },
        components: {
            Editor,
        },
        mounted: () => {
            setTimeout(() => {
                document.querySelector('#mceu_31').style.display = 'none';
            }, 1100);
        },
    }
</script>

<style scoped>
    .mce-widget .mce-notification. mce-notification-warning .mce-has-close .mce-in {
        display: none !important;
    }

    .mce-notification-inner {
        display: none !important;
    }
</style>