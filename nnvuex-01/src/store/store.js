import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
    strict: true,
    state: {
        products: [
            {name: 'Banana Skin', price: 20},
            {name: 'Shiny Star', price: 40},
            {name: 'Green Shells', price: 60},
            {name: 'Red Shells', price: 80}
          ]
    },
    getters: {
        // saleProducts: state => {
        saleProducts: function(state) {
            // var saleProducts = state.products.map(product => {
            var saleProducts = state.products.map(function(product) {
                return {
                    name: '**' + product.name + '**',
                    price: product.price / 2
                }
            });
            return saleProducts;
        }
    },
    mutations: {
        reducePrice: function(state) {
            state.products.forEach(function(product) {
                product.price -= 1;
            });
        }
    }
});