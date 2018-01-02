<template>
    <tr>
        <td>
            <div class="field">
                <div class="control">
                    <input type="text" @keyup="validarInput()"
                           v-model="respuesta" :class="[valid ? 'is-success' : '', 'input']">
                </div>
            </div>
        </td>
        <td>{{verbo.verbo}}</td>
        <td>{{verbo.ejemplo}} <br> {{verbo.exampel}}</td>
    </tr>
</template>
<style scoped>
    td, input {
        text-align: center;
    }
</style>
<script>
    export default{
        props: ['verbo'],
        mounted(){
            //console.log(this.verbo);
        },
        data(){
            return {
                valid: false,
                respuesta: '',
            }
        },
        components: {},
        methods: {
            validarInput(){
                this.valid = this.respuesta.toLowerCase() === this.verbo.verb.toLowerCase();
                this.$emit('actualizar', this.verbo.verbo, this.valid);
                /*if (this.respuesta.toLowerCase() === this.verbo.verb.toLowerCase()) {
                 this.valid = true;
                 this.$emit('actualizar', this.verbo.verbo, true);
                 } else {
                 this.valid = false;
                 }*/
            }
        },
    }
</script>
