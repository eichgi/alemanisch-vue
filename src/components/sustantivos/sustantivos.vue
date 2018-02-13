<template>
    <div>
        <div class="tabs is-centered" v-show="$route.path !== '/sustantivos'">
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
                <router-link active-class="is-active" exact tag="li" to="/sustantivos/transporte">
                    <a>Transporte</a>
                </router-link>
                <router-link active-class="is-active" exact tag="li" to="/sustantivos/tiempo">
                    <a>Tiempo</a>
                </router-link>
            </ul>
        </div>
        <router-view></router-view>
        <section class="hero is-fullheight" v-show="$route.path === '/sustantivos'">
            <div class="hero-head has-text-centered">
                <p class="is-size-2-touch is-size-1-desktop" style=" display: inline-block; padding-top: 1.5em; border-bottom: 2px solid #444;">
                    Elige una categoria</p>
            </div>
            <div class="hero-body">
                <div class="container">
                    <div class="tile is-ancestor">
                        <div class="tile is-parent is-vertical is-6 has-text-centered">
                            <router-link tag="div" to="/sustantivos/personas" class="tile is-child box tile-link">
                                <p class="title">Personas</p>
                                <i class="fa fa-2x fa-users"></i>
                            </router-link>
                            <router-link tag="div" to="/sustantivos/animales" class="tile is-child box tile-link">
                                <p class="title">Animales</p>
                                <i class="fa fa-2x fa-pied-piper-alt"></i>
                            </router-link>
                            <router-link tag="div" to="/sustantivos/tiempo" class="tile is-child box tile-link">
                                <p class="title">Tiempo</p>
                                <i class="fa fa-2x fa-clock-o"></i>
                            </router-link>
                        </div>

                        <div class="tile is-parent is-vertical is-6 has-text-centered">
                            <router-link tag="div" to="/sustantivos/lugares" class="tile is-child box tile-link">
                                <p class="title">Lugares</p>
                                <i class="fa fa-2x fa-home"></i>
                            </router-link>
                            <router-link tag="div" to="#" class="tile is-child box tile-link">
                                <p class="title">Transporte</p>
                                <i class="fa fa-2x fa-ship"></i>
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
<style scoped>
    .tabs:not(:last-child) {
        margin-bottom: 0;
    }

    .hero {
        background: whitesmoke;
    }

    .tile-link {
        cursor: pointer;
    }

    .tile-link:hover,
    .tile-link:hover .title {
        background: hsl(217, 71%, 53%);
        color: snow;
    }

    .disabled {
        background: #e5e5e5;
    }
</style>
<script>
    export default{
        data(){
            return {}
        },
        components: {}
    }
</script>
