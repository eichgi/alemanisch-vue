<template>
    <div class="card">
        <header class="card-header">
            <p class="card-header-title">
                Información
            </p>
        </header>
        <div class="card-content">
            <div class="content">
                <p v-html="descripcion"></p>
            </div>
        </div>
    </div>
</template>
<script>
    export default{
        props: ['descripcion'],
        data(){
            return {

            }
        },
    }
</script>
