<template>
    <div>
        <!--<div class="columns xyz">
            <div class="column is-10 is-offset-1">
                <div class="columns">
                    <div class="column is-3 is-hidden-touch">
                        <aside class="menu">
                            <p class="menu-label">
                                Verbos
                            </p>
                            <ul class="menu-list">
                                <router-link active-class="is-active" exact tag="li" to="/verbos/regulares?nivel=1"><a>Regulares</a>
                                </router-link>
                                <li><a>Irregulares</a></li>
                                <li><a>Modales</a></li>
                            </ul>
                            &lt;!&ndash;<p class="menu-label">
                                Verbos irregulares
                            </p>
                            <ul class="menu-list">
                                <li><a>Básicos</a></li>
                                <li><a>Intermedios</a></li>
                                <li><a>Avanzados</a></li>
                            </ul>&ndash;&gt;
                        </aside>
                    </div>
                    <div class="column is-9">
                        <div class="select is-fullwidth is-hidden-desktop">
                            <select>
                                <option selected style="background: #444; color: whitesmoke; text-align:center;">Verbos
                                    Regulares
                                </option>
                                <router-link tag="option" to="/verbos/regulares">Básicos</router-link>
                                &lt;!&ndash;<option>Básicos</option>&ndash;&gt;
                                <option>Intermedio</option>
                                <option>Avanzados</option>
                            </select>
                        </div>
                        <router-view></router-view>
                    </div>
                </div>
            </div>
        </div>-->
        <div class="tabs is-centered is-toggle is-fullwidth">
            <ul>
                <router-link active-class="is-active" exact tag="li" to="/verbos/regulares">
                    <a>
                        <span>Regulares</span>
                    </a>
                </router-link>
                <router-link active-class="is-active" tag="li" class="" to="/pronombres/irregulares">
                    <a>
                        <span>Irregulares</span>
                    </a>
                </router-link>
                <router-link active-class="is-active" tag="li" class="" to="/pronombres/modales">
                    <a>
                        <span>Modales</span>
                    </a>
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
