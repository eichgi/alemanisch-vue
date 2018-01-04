<template>
    <div class="field is-horizontal">
        <div class="field-label is-normal">
            <label class="label">{{pronombre.pronombre.capitalize()}}</label>
        </div>
        <div class="field-body">
            <div class="field">
                <div class="control">
                    <input type="text" @keyup="validarInput($event)" v-model="pronomen"
                           :class="[valid ? 'is-success' : '', 'input']">
                </div>
                <p v-show="valid" class="help is-success">{{pronombre.ejemplo}} | {{pronombre.exempel}}</p>
            </div>
        </div>
    </div>
</template>
<script>
    String.prototype.capitalize = function () {
        return this.charAt(0).toUpperCase() + this.slice(1);
    };

    export default {
        mounted: function () {
            //console.log(this.pronombre);
        },
        props: ['pronombre'],
        data(){
            return {
                valid: false,
                pronomen: ''
            }
        },
        methods: {
            validarInput(event){
                if (event.target.value.toLowerCase() === this.pronombre.pronomen) {
                    this.valid = true;
                    this.$emit('actualizar', this.pronombre.pronombre);
                } else {
                    this.valid = false;
                }
            }
        }
    }
</script>
