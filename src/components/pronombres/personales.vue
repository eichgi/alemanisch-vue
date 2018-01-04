<template>
    <div>
        <div class="tabs is-centered is-toggle is-fullwidth">
            <ul>
                <router-link active-class="is-active" exact tag="li" to="/pronombres/nominativos">
                    <a>
                        <span>Nominativos</span>
                    </a>
                </router-link>
                <router-link active-class="is-active" tag="li" class="" to="/pronombres/acusativos">
                    <a>
                        <span>Acusativos</span>
                    </a>
                </router-link>
                <router-link active-class="is-active" tag="li" class="" to="/pronombres/dativos">
                    <a>
                        <span>Dativos</span>
                    </a>
                </router-link>
                <router-link active-class="is-active" tag="li" class="" to="/pronombres/posesivos">
                    <a>
                        <span>Posesivos</span>
                    </a>
                </router-link>
                <!--<router-link active-class="is-active" tag="li" class="" to="/pronombres/reflexivos">
                    <a>
                        <span>Reflexivos</span>
                    </a>
                </router-link>-->
            </ul>
        </div>

        <router-view></router-view>
    </div>
</template>
<script>
    export default {}
</script>
