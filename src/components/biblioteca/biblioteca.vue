<template>
    <section class="container">
        <div class="columns" style="margin-top: 1em">
            <div class="column is-3">
                <aside class="menu" style="margin-top: 1.5em">
                    <p class="menu-label">
                        Listado de publicaciones
                    </p>
                    <ul class="menu-list">
                        <li v-for="post in posts">
                            <router-link v-bind:to="'/biblioteca/post/'+post.id">{{post.title}}</router-link>
                        </li>
                    </ul>
                </aside>
            </div>
            <div class="column is-9 box" style="margin-bottom: 2em">
                <!--<div class="tile is-ancestor">
                    <div class="tile is-vertical is-12">
                        <div class="tile is-parent">
                            <article class="tile is-child box">
                                <p class="title">¿Qué puedo encontrar aquí?</p>
                                <div class="content">
                                    <p>Como te habrás dado cuenta, al momento de realizar un ejercicio hay un pequeño
                                        bloque de información que corresponde a la actividad por realizar. En esta
                                        sección podrás encontrar más información sobre el idioma, de manera que te pueda
                                        ayudar a entender mejor el alemán y sus reglas.</p>
                                </div>
                            </article>
                        </div>
                    </div>
                </div>-->
                <router-view></router-view>
            </div>
        </div>
    </section>
</template>

<script>
    import Axios from './../../axios'

    export default {
        created() {
            this.getPosts();
        },
        name: "biblioteca",
        data() {
            return {
                posts: null,
            }
        },
        methods: {
            getPosts() {
                Axios
                    .get('/posts')
                    .then((res) => {
                        console.log(res);
                        this.posts = res.data.posts;
                    });
            },
        },
    }
</script>

<style scoped>
    section {
        min-height: 80vh;
    }

    .menu-list > li > a:hover {
        background: #3273dc;
        color: white;
    }

    .columns {
        width: 100%;
    }

    .card {
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.18);
        margin-bottom: 2rem;
    }

    .card-header-title {
        color: #8F99A3;
        font-weight: 400;
    }

    .info-tiles {
        margin: 1rem 0;
    }

    .info-tiles .subtitle {
        font-weight: 300;
        color: #8F99A3;
    }

    .hero.welcome.is-info {
        background: #36D1DC;
        background: -webkit-linear-gradient(to right, #5B86E5, #36D1DC);
        background: linear-gradient(to right, #5B86E5, #36D1DC);
    }

    .hero.welcome .title, .hero.welcome .subtitle {
        color: hsl(192, 17%, 99%);
    }

    .card .content {
        font-size: 14px;
    }

    .card-footer-item {
        font-size: 14px;
        font-weight: 700;
        color: #8F99A3;
    }

    .card-footer-item:hover {
    }

    .card-table .table {
        margin-bottom: 0;
    }

    .events-card .card-table {
        max-height: 250px;
        overflow-y: scroll;
    }
</style>