<template>
    <div class="card">
        <header class="card-header">
            <p class="card-header-title">
                Información
            </p>
        </header>
        <div class="card-content">
            <div class="content">
                <p>{{descripcion}}</p>
                <p>Puedes encontrar más información en el siguiente enlace:
                    <a :href="enlace">{{enlace}}</a>
                </p>
            </div>
        </div>
    </div>
</template>
<script>
    export default{
        props: ['descripcion', 'enlace'],
    }
</script>
