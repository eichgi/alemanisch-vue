<template>
    <div>
        <div class="column is-12">
            <h1 class="title has-text-centered">Bienvenido a la Biblioteca</h1>
            <p>Este módulo esta hecho para ayudar a entender mejor los ejercicios que realizas. Aunque más adelante
                contará con mas contenido que podría no estar enteramente relacionado con la sección de ejercicios
                pero que de igual forma te ayudará a aprender más el idioma alemán.</p>
        </div>
        <!--<div class="columns">
            <div class="column is-half">
                <router-link tag="div" to="/admin/editor" class="box has-text-centered link">
                    <p class="title">Nueva publicación</p>
                    <i class="fa fa-2x fa-pencil"></i>
                </router-link>
            </div>
            <div class="column is-half">
                <router-link tag="div" to="#" class="box has-text-centered link">
                    <p class="title">(Por definir)</p>
                    <i class="fa fa-2x fa-question"></i>
                </router-link>
            </div>
        </div>-->
    </div>
</template>

<script>
    export default {
        name: "placeholder"
    }
</script>

<style scoped>
    .link {
        cursor: pointer;
    }

    .link:hover,
    .link:hover .title {
        background: hsl(217, 71%, 53%);
        color: snow;
    }
</style>