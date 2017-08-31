import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
    strict: true,
    // good idea to use actions for debugging purposes
    // actions: context => {
    actions: {
        reducePrice: function(context, payload) {
            setTimeout(function() {
                context.commit('reducePrice', payload);
            }, 2000)
        }
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
        reducePrice: function(state, payload) {
            // setTimeout(function() {
            state.products.forEach(function(product) {
                product.price -= payload;
            });
            // }, 3000)
        }
    },
    state: {
        products: [
            {name: 'Banana Skin', price: 20},
            {name: 'Shiny Star', price: 40},
            {name: 'Green Shells', price: 60},
            {name: 'Red Shells', price: 80}
          ]
    }
});