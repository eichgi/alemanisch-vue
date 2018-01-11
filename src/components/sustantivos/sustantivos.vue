<template>
    <div>
        <div class="tabs is-centered">
            <ul>
                <router-link active-class="is-active" exact tag="li" to="/sustantivos/personas">
                    <a>Personas</a>
                </router-link>
                <router-link active-class="is-active" exact tag="li" to="/sustantivos/animales">
                    <a>Animales</a>
                </router-link>
                <router-link active-class="is-active" exact tag="li" to="/sustantivos/lugares">
                    <a>Lugares</a>
                </router-link>
            </ul>
        </div>
        <router-view></router-view>
    </div>
</template>
<style scoped>
    .tabs:not(:last-child) {
        margin-bottom: 0;
    }
</style>
<script>
    export default{
        data(){
            return {
                msg: 'hello vue'
            }
        },
        components: {}
    }
</script>
