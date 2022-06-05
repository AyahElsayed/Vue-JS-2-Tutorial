Vue.component('greeting', {
    template: '<p>Hey there, I am {{name}} <button v-on:click="changName">change name</button></p>',
    data: function () {
        return {
            name: 'Aya'
        }
    },
    methods: {
        changName: function () {
            this.name = 'Mai'
        }
    },
});



new Vue({
    el: '#vue-app-one'
});

new Vue({
    el: '#vue-app-two'
});
