<template>
    <div id="app">
        <app-header></app-header>
        <router-view></router-view>
        <app-footer></app-footer>
    </div>
</template>

<script>
    document.addEventListener('DOMContentLoaded', function () {
        let $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
        if ($navbarBurgers.length > 0) {
            $navbarBurgers.forEach(function ($el) {
                $el.addEventListener('click', function () {

                    // Get the target from the "data-target" attribute
                    var target = $el.dataset.target;
                    var $target = document.getElementById(target);

                    // Toggle the class on both the "navbar-burger" and the "navbar-menu"
                    $el.classList.toggle('is-active');
                    $target.classList.toggle('is-active');

                });
            });
        }
    });

    import Header from './components/layouts/header.vue'
    import Footer from './components/layouts/footer.vue'
    import store from './store'

    export default {
        name: 'app',
        components: {
            'app-header': Header,
            'app-footer': Footer,
        },
        data () {
            return {}
        },
        created(){
            this.$store.dispatch('checkIfLogin');
        }
    }
</script>

<style>
    @import "../node_modules/bulma/css/bulma.css";
</style>
