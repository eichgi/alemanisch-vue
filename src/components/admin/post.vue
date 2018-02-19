<template>
    <div id="section-welcome">
        <div v-show="$route.path === '/admin'">
            <h1 class="title">Bienvenido Administrador</h1>
            <p>Este módulo es para crear y/o editar publicaciones</p>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: "post",
        data: () => {
            return {}
        },
        methods: {},
        /*watch: {
            '$route'(to, from) {
                if (to.params.post === 'editor') {
                    this.sectionVisible = 'editor';
                }
            }
        }*/
    }
</script>

<style scoped>

</style>