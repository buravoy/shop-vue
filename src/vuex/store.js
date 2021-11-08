import Vue from 'vue';
import Vuex from 'vuex';
// import axios from "axios";

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        goodsByGroups: {},
        names: {},
        currencies: {
            usd: 70
        },
        cart: []
    },

    mutations: {
        SET_GOODS(state, goods) {
            const parsedProducts = {}
            goods.forEach((item) => {
                const product = {
                    id: item.T,
                    name: state.names[+item.G].B[+item.T].N,
                    groupId: item.G,
                    groupName: state.names[+item.G].G,
                    price: item.C * state.currencies.usd,
                    parts: item.P
                }
                parsedProducts[item.G] ? parsedProducts[item.G].push(product) : parsedProducts[item.G] = [product];
            })

            state.goodsByGroups = parsedProducts
        },

        SET_NAMES(state, names) {
            this.state.names = names;
        },

        SET_IN_CART: (state, productData) => {
            console.log(productData)
            // state.cart.map((item) => {
            //
            // })
            //
            // if(state.cart.length) {
            //
            // }
            //
            // state.cart.push(productData)
        },

        DEL_FROM_CART(state, index) {
            state.cart.splice(index, 1)
        },

        SET_USD(state, value) {
            state.currencies.usd = value
        }
    },

    actions: {
        GET_GOODS({commit}) {
            return fetch('data.json')
                .then(response => response.json())
                .then(response => commit('SET_GOODS', response.Value.Goods))
        },

        GET_NAMES({commit}) {
            return fetch('names.json')
                .then(response => response.json())
                .then((response) => {
                    commit('SET_NAMES', response);
                })
        },

        ADD_TO_CART({commit}, productData) {
            commit('SET_IN_CART', productData)
        },

        REMOVE_FROM_CARD({commit}, index) {
            commit('DEL_FROM_CART', index)
        },

        UPDATE_USD({commit}, index) {
            commit('SET_USD', index)
        }
    },

    getters: {
        GOODS_BY_GROUPS(state) {
            return state.goodsByGroups;
        },

        CART(state) {
            return state.cart
        },

        CURRENCIES(state) {
            return state.currencies
        }
    }
})

export default store;