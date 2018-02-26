<template>
    <div id="section-welcome">
        <div v-show="$route.path === '/admin'">
            <h1 class="title">Bienvenido AdministradorX</h1>
            <p>Este módulo es para crear y/o editar publicaciones</p>
        </div>
        <div v-show="$route.path === '/biblioteca'">
            <h1 class="title">Bienvenido a la Biblioteca</h1>
            <p>Este módulo esta hecho para ayudar a entender mejor los ejercicios que realizas. Aunque más adelante
                contará con mas contenido que podría no estar enteramente relacionado con la sección de ejercicios
                pero que de igual forma te ayudará a aprender más el idioma alemán.</p>
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
    }
</script>

<style scoped>

</style>