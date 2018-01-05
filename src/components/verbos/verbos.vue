<template>
    <div>
        <div class="tabs is-centered is-toggle is-fullwidth">
            <ul>
                <router-link active-class="is-active" exact tag="li" to="/verbos/regulares">
                    <a><span>Regulares</span></a>
                </router-link>
                <router-link active-class="is-active" tag="li" class="" to="/verbos/irregulares">
                    <a><span>Irregulares</span></a>
                </router-link>
                <router-link active-class="is-active" tag="li" class="" to="/verbos/modales">
                    <a><span>Modales</span></a>
                </router-link>
            </ul>
        </div>
        <router-view></router-view>
    </div>
</template>
<style>
    .menu {
        margin-top: 1.5em;
    }

    .xyz {
        background: none;
    }

    .is-active > a {
        background: #209cee;
        color: snow;
    }
</style>
<script>
    export default{
        data(){
            return {}
        },
    }
</script>
