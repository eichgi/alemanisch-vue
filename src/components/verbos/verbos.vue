<template>
    <div>
        <div class="tabs is-centered" v-show="$route.path !== '/verbos'">
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
                <router-link active-class="is-active" tag="li" class="" to="/verbos/auxiliares">
                    <a><span>Auxiliares</span></a>
                </router-link>
            </ul>
        </div>
        <router-view></router-view>
        <!--<section class="hero is-fullheight" v-show="$route.path === '/verbos'">
            <div class="hero-body">
                <div class="container">
                    <div class="tile is-ancestor">
                        <div class="tile column is-6 is-offset-3 is-vertical is-parent has-text-centered">
                            <router-link tag="div" to="/verbos/regulares" class="tile is-child box tile-link">
                                <p class="title">Verbos Regulares</p>
                                <i class="fa fa-2x fa-long-arrow-right"></i>
                            </router-link>
                            <router-link tag="div" to="/verbos/irregulares" class="tile is-child box tile-link">
                                <p class="title">Verbos Irregulares</p>
                                <i class="fa fa-2x fa-long-arrow-right"></i>
                            </router-link>
                            <router-link tag="div" to="/verbos/modales" class="tile is-child box tile-link">
                                <p class="title">Verbos Modales</p>
                                <i class="fa fa-2x fa-long-arrow-right"></i>
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </section>-->
        <section class="hero is-fullheight" v-show="$route.path === '/verbos'">
            <div class="hero-head has-text-centered">
                <p class="is-size-2-touch is-size-1-desktop"
                   style=" display: inline-block; padding-top: 1.5em; border-bottom: 2px solid #444;">
                    Elige una categoria</p>
            </div>
            <div class="hero-body">
                <div class="container">
                    <div class="tile is-ancestor">
                        <div class="tile is-parent is-vertical is-6 has-text-centered">
                            <router-link tag="div" to="/verbos/regulares" class="tile is-child box tile-link">
                                <p class="title">Regulares</p>
                                <i class="fa fa-2x fa-long-arrow-right"></i>
                            </router-link>
                            <router-link tag="div" to="/verbos/irregulares" class="tile is-child box tile-link">
                                <p class="title">Irregulares</p>
                                <i class="fa fa-2x fa-long-arrow-right"></i>
                            </router-link>
                        </div>

                        <div class="tile is-parent is-vertical is-6 has-text-centered">
                            <router-link tag="div" to="/verbos/modales" class="tile is-child box tile-link">
                                <p class="title">Modales</p>
                                <i class="fa fa-2x fa-long-arrow-right"></i>
                            </router-link>
                            <router-link tag="div" to="/verbos/auxiliares" class="tile is-child box tile-link">
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

    /*.is-active > a {
        background: #209cee;
        color: snow;
    }*/

</style>
<script>
    export default{
        data(){
            return {}
        },
    }
</script>
