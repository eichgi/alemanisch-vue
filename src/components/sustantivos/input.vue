<template>
    <tr>
        <td>{{sustantivo.sustantivo}}</td>
        <td>
            <div class="field">
                <div class="control">
                    <input type="text" @keyup="validateResponse"
                           v-model="article" :class="[validArticle ? 'is-success' : '', 'input']"/>
                </div>
            </div>
        </td>
        <td>
            <div class="field">
                <div class="control">
                    <input type="text" @keyup="validateResponse"
                           v-model="noun" :class="[validNoun ? 'is-success' : '', 'input']"/>
                </div>
            </div>
        </td>
    </tr>
</template>
<style scoped>
    td, input {
        text-align: center;
    }
</style>
<script>
    export default{
        props: ['sustantivo'],
        data(){
            return {
                valid: false,
                validArticle: false,
                validNoun: false,
                article: null,
                noun: null,
            }
        },
        methods: {
            validateResponse(){
                this.validArticle = this.article.toLowerCase() === this.sustantivo.artikel.toLowerCase();
                this.validNoun = this.noun.toLowerCase() === this.sustantivo.substantiv.toLowerCase();
                this.valid = this.validArticle && this.validNoun;
                this.$emit('updateResponse', this.sustantivo.sustantivo, this.valid);
            },
        },
    }
</script>
