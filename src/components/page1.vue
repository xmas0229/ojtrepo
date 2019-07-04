<title> Using Directives</title>

<template>
<div id="root">
    Sign up
    <br>
    <p v-once> {{ email }}</p>
    <input v-model="email" :class="[email.length<2?'red' : 'green']">
    <p v-text="email"></p>
    <br>
<script>
    export default {
        el: '#root',
        data () {
            return {
                email: 'Jude Pineda'
            }
        }
    }

</script>



<style scoped>
    .red{
        border: 2px solid red;
    }
    .green{
        border: 2px solid green;
    }
</style>
