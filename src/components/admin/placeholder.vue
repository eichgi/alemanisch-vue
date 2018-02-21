<template>
    <div>
        <div class="column is-12 has-text-centered">
            <p class="title">Bienvenido Administrador</p>
            <br>
        </div>
        <div class="columns">
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
        </div>
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