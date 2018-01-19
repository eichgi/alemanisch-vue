<template>
    <div class="field is-horizontal">
        <div class="field-label is-normal">
            <label class="label">{{pronoun.pronomen.capitalize()}}</label>
        </div>
        <div class="field-body">
            <div class="field">
                <div class="control">
                    <input type="text" @keyup="validarInput($event)" v-model="response"
                           :class="[valid ? 'is-success' : '', 'input']">
                </div>
                <!--<p v-show="valid" class="help is-success">{{pronombre.ejemplo}} | {{pronombre.exempel}}</p>-->
            </div>
        </div>
    </div>
</template>
<style scoped>

</style>
<script>
    String.prototype.capitalize = function () {
        return this.charAt(0).toUpperCase() + this.slice(1);
    };

    export default{
        props: ['pronoun'],
        data(){
            return {
                response: null,
                valid: false,
            }
        },
        methods: {
            validarInput(){
                this.valid = this.response === this.pronoun.verb;
                this.$emit('updateResponse', this.pronoun.verb, this.valid);
            }
        },
    }
</script>
