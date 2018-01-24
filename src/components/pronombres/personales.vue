<template>
    <div>
        <div class="tabs is-centered" v-show="$route.path !== '/pronombres'">
            <ul>
                <router-link active-class="is-active" exact tag="li" to="/pronombres/nominativos">
                    <a><span>Nominativos</span></a>
                </router-link>
                <router-link active-class="is-active" tag="li" class="" to="/pronombres/acusativos">
                    <a><span>Acusativos</span></a>
                </router-link>
                <router-link active-class="is-active" tag="li" class="" to="/pronombres/dativos">
                    <a><span>Dativos</span></a>
                </router-link>
                <router-link active-class="is-active" tag="li" class="" to="/pronombres/posesivos">
                    <a><span>Posesivos</span></a>
                </router-link>
            </ul>
        </div>
        <router-view></router-view>
        <section class="hero is-fullheight" v-show="$route.path === '/pronombres'">
            <div class="hero-head has-text-centered">
                <p class="is-size-2-touch is-size-1-desktop"
                   style=" display: inline-block; padding-top: 1.5em; border-bottom: 2px solid #444;">
                    Elige una categoria</p>
            </div>
            <div class="hero-body">
                <div class="container">
                    <div class="tile is-ancestor">
                        <div class="tile is-parent is-vertical is-6 has-text-centered">
                            <router-link tag="div" to="/pronombres/nominativos" class="tile is-child box tile-link">
                                <p class="title">Nominativos</p>
                                <i class="fa fa-2x fa-long-arrow-right"></i>
                            </router-link>
                            <router-link tag="div" to="/pronombres/acusativos" class="tile is-child box tile-link">
                                <p class="title">Acusativos</p>
                                <i class="fa fa-2x fa-long-arrow-right"></i>
                            </router-link>
                        </div>

                        <div class="tile is-parent is-vertical is-6 has-text-centered">
                            <router-link tag="div" to="/pronombres/dativos" class="tile is-child box tile-link">
                                <p class="title">Dativos</p>
                                <i class="fa fa-2x fa-long-arrow-right"></i>
                            </router-link>
                            <router-link tag="div" to="/pronombres/posesivos" class="tile is-child box tile-link">
                                <p class="title">Posesivos</p>
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
    export default {}
</script>
