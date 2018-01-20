<template>
    <div>
        <div class="tabs is-centered" v-show="$route.path !== '/conjugador'">
            <ul>
                <router-link active-class="is-active" exact tag="li" to="/conjugador/regulares">
                    <a><span>Regulares</span></a>
                </router-link>
                <router-link active-class="is-active" tag="li" class="" to="/conjugador/irregulares">
                    <a><span>Irregulares</span></a>
                </router-link>
                <router-link active-class="is-active" tag="li" class="" to="/conjugador/modales">
                    <a><span>Modales</span></a>
                </router-link>
                <router-link active-class="is-active" tag="li" class="" to="/conjugador/auxiliares">
                    <a><span>Auxiliares</span></a>
                </router-link>
            </ul>
        </div>
        <router-view></router-view>
        <section class="hero is-fullheight" v-show="$route.path === '/conjugador'">
            <div class="hero-head has-text-centered">
                <p class="is-size-2-touch is-size-1-desktop"
                   style=" display: inline-block; padding-top: 1.5em; border-bottom: 2px solid #444;">
                    Elige una categoria</p>
            </div>
            <div class="hero-body">
                <div class="container">
                    <div class="tile is-ancestor">
                        <div class="tile is-parent is-vertical is-6 has-text-centered">
                            <router-link tag="div" to="/conjugador/regulares" class="tile is-child box tile-link">
                                <p class="title">Regulares</p>
                                <i class="fa fa-2x fa-long-arrow-right"></i>
                            </router-link>
                            <router-link tag="div" to="/conjugador/irregulares" class="tile is-child box tile-link">
                                <p class="title">Irregulares</p>
                                <i class="fa fa-2x fa-long-arrow-right"></i>
                            </router-link>
                        </div>

                        <div class="tile is-parent is-vertical is-6 has-text-centered">
                            <router-link tag="div" to="/conjugador/modales" class="tile is-child box tile-link">
                                <p class="title">Modales</p>
                                <i class="fa fa-2x fa-long-arrow-right"></i>
                            </router-link>
                            <router-link tag="div" to="/conjugador/auxiliares" class="tile is-child box tile-link">
                                <p class="title">Auxiliares</p>
                                <i class="fa fa-2x fa-long-arrow-right"></i>
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

    .menu {
        margin-top: 1.5em;
    }
</style>
<script>
    export default {}
</script>
