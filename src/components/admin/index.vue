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
                    <p class="menu-label" @click="toggleList">
                        Listado de publicaciones
                        <i class="fa fa-caret-down" v-if="toggle"></i>
                        <i class="fa fa-caret-right" v-else></i>
                    </p>
                    <ul class="menu-list" v-show="toggle">
                        <li v-for="post in posts">
                            <router-link v-bind:to="'/admin/post/'+post.id">{{post.title}}</router-link>
                        </li>
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
                toggle: true,
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
            toggleList() {

                this.toggle = !this.toggle;
            }
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
</style>