<template>
    <table class="table is-bordered is-striped is-hoverable is-fullwidth">
        <thead>
        <th>Ejercicio</th>
        <th>Realizado</th>
        </thead>
        <tbody>
            <tr v-for="pronombre in historial">
                <td>{{pronombre.nombre}}</td>
                <td class="has-text-centered">{{pronombre.total}}</td>
            </tr>
        </tbody>
    </table>
</template>
<style></style>
<script>
    export default{
        props: ['historial'],
        data(){
            return {}
        },
        components: {}
    }
</script>
