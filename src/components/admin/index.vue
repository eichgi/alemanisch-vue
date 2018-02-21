<template>
    <section class="container">
        <div class="columns" style="margin: 2em 0">
            <div class="column is-3">
                <div class="has-text-centered">
                    <router-link to="/admin" class="button is-primary is-fullwidth">
                        Administrador
                    </router-link>
                </div>
                <aside class="menu" style="margin-top: 1.5em">
                    <p class="menu-label">Listado de publicaciones</p>
                    <ul class="menu-list">
                        <li v-for="post in posts">
                            <router-link v-bind:to="'/admin/post/'+post.id">{{post.title}}</router-link>
                        </li>
                        <!--<li><a>Pronombres</a></li>
                        <li><a>Verbos</a></li>
                        <li><a>Sustantivos</a></li>
                        <li>
                            <a>Conjugador</a>
                            <ul>
                                <li><a>Presente</a></li>
                                <li><a>Pasado</a></li>
                                <li><a>Futuro</a></li>
                            </ul>
                        </li>-->
                    </ul>
                </aside>
            </div>
            <div class="column is-9 box">
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
        name: "index",
        data: () => {
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
            }
        },
    }
</script>

<style scoped>
    .menu-list > li > a:hover {
        background: #3273dc;
        color: white;
    }
</style>