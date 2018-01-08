<template>
    <nav class="navbar is-dark" v-show="$route.path !== '/'">
        <div id="navbarExampleTransparentExample" class="navbar-menu">
            <div class="navbar-start">
                <div class="navbar-item">
                    <a href="https://eichgi.com" target="_blank" class="link">Hiram Guerrero</a>
                </div>
            </div>

            <div class="navbar-end">
                <div class="navbar-item">
                    <a href="https://github.com/eichgi" target="_blank" class="link icon"><i class="fa fa-lg fa-github"></i></a>
                </div>
            </div>
        </div>
    </nav>
</template>
<style scoped>
    a.link {
        color: #DDD;
    }

    a.link:hover {
        color: #FFF;
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
