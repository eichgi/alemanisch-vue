<template>
    <section class="hero is-fullheight">
        <div class="hero-head has-text-centered">
            <p class="is-size-2-touch is-size-1-desktop" style="padding-top: 1.5em;">Nuestros ejercicios</p>
            <p class="subtitle">Porque aprender gramatica es muy importante</p>
        </div>
        <div class="hero-body">
            <div class="container">
                <div class="tile is-ancestor">
                    <div class="tile is-parent is-vertical is-6 has-text-centered">
                        <router-link tag="div" to="/pronombres/nominativos" class="tile is-child box tile-link">
                            <p class="title">Pronombres</p>
                            <i class="fa fa-2x fa-long-arrow-right"></i>
                        </router-link>
                        <router-link tag="div" to="/verbos" class="tile is-child box tile-link">
                            <p class="title">Verbos</p>
                            <i class="fa fa-2x fa-long-arrow-right"></i>
                        </router-link>
                    </div>

                    <div class="tile is-parent is-vertical is-6 has-text-centered">
                        <router-link tag="div" to="/sustantivos/personas" class="tile is-child box tile-link">
                            <p class="title">Sustantivos</p>
                            <i class="fa fa-2x fa-long-arrow-right"></i>
                        </router-link>
                        <router-link tag="div" to="#" class="tile is-child box disabled">
                            <p class="title">Conjugador</p>
                            <i class="fa fa-2x fa-long-arrow-right"></i>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </section>
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
    export default{
        data(){
            return {
                msg: 'hello vue'
            }
        },
    }
</script>
