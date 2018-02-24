<template>
    <div>
        <div>
            <div class="is-pulled-right">
                <router-link :to="'/admin/editor/'+post.id" class="button is-danger" v-show="">
                    <i class="fa fa-pencil"></i> &nbsp;
                    Editar
                </router-link>
            </div>
            <h1 class="title">{{post.title}}</h1>
        </div>
        <div v-html="post.content"></div>
    </div>
</template>

<script>
    import Axios from './../../axios'

    export default {
        name: "post-view",
        beforeRouteUpdate(to, from, next) {
            this.id = to.params.id;
            this.getPost();
            next();
        },
        created() {
            this.id = this.$route.params.id;
            this.getPost();
        },
        data: () => {
            return {
                id: null,
                post: {
                    title: '',
                    content: '',
                },
            }
        },
        methods: {
            getPost() {
                Axios.get('/posts/' + this.id)
                    .then((res) => {
                        console.log(res);
                        this.post = res.data.post;
                    });
            },
        },
    }
</script>

<style scoped>

</style>