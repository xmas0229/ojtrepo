export default {
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
}

setTimeout(function(){
    '#page2'.$destroy();
}, 5000);
