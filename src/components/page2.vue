<title> Adding Props </title>


<template>
    <div id="page2">
        {{ SportsCar }}
        <br>
        <input v-model="newCar" @keyup.enter="addCars">
        <button @click="addCars">
            + ADD
         </button>

        <ul>
            <li v-for="car in cars"> {{ car.name }}</li>
        </ul>
    </div>
</template>

<script>
    import App from './App.vue'
    import Vue from 'vue'
    App = new Vue ({
        el: '#root',
        component: {

        },
        data () {
            return {
                cars: [
                    { name: 'Ferrari'},
                    { name: 'Hyundai'},
                    { name: 'Porsche'}

                ],
                newCar: ''
            }
        },
        methods: {
            addCars: function() {
                this.cars.push({name: this.newCar})
                this.newCar = ''
            }
        },
        computed: {
            SportsCar: function() {
                if (this.newCar.length > 1) {
                    return this.newCar + '   SportsCar'
                }
            }
        },
        created: function()  {
            console.log('Created')
        },
        mounted: function() {
            console.log('Mounted')
        },
        updated: function() {
            console.log('Updated')
        },
        destroyed: function() {
            console.log('Destroyed')

        },
    })

    setTimeout(function(){
        app.$destroy();
    }, 5000);

</script>

<style scoped>

</style>

<!-- filters: {
           capitalize: function(value) {
                return value.toUpperCase()
            },
            SportsCar: function(value) {
                return value + '   SuperCars'
        }

        }

        -->
