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
                            <router-link v-bind:to="'/admin/post/'+post.id"
                                         :class="($route.params.id == post.id) ? 'selected': ''">
                                {{post.title}}
                            </router-link>
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
    import Store from './../../store'

    export default {
        created() {
            this.$store.dispatch('getPosts');
        },
        computed: {
            posts: function () {
                return Store.getters.posts;
            },
        },
        name: "index",
        data: () => {
            return {
                toggle: true,
            }
        },
        methods: {
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

    .selected {
        background: #3273dc;
        color: white;
    }

    .menu-list > li > a:hover {
        background: #3273dc;
        color: white;
    }
</style>