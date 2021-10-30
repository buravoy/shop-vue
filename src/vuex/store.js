import Vue from 'vue';
import Vuex from 'vuex';
// import axios from "axios";

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        goodsByGroups: {},
        names: {
            groups: {},
            products: {}
        },
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
                    id: item.t,
                    name: state.names.products[+item.t],
                    groupId: item.g,
                    groupName: state.names.groups[+item.g],
                    price: item.c * state.currencies.usd,
                    parts: item.p
                }

                parsedProducts[item.g] ? parsedProducts[item.g].push(product) : parsedProducts[item.g] = [product];
            })

            state.goodsByGroups = parsedProducts
        },

        SET_GROUPS_NAMES(state, groupsNames) {
            groupsNames.forEach((item) => {
                state.names.groups[item.id] = item.name
            })
        },

        SET_PRODUCT_NAMES(state, productsNames) {
            productsNames.forEach((item) => {
                state.names.products[item.id] = item.name
            })
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
        }

    },

    actions: {
        GET_GOODS({commit}) {
            return fetch('data.json')
                .then(response => response.json())
                .then(response => commit('SET_GOODS', response.goods))
        },

        GET_NAMES({commit}) {
            return fetch('names.json')
                .then(response => response.json())
                .then((response) => {
                    commit('SET_GROUPS_NAMES', response.groups);
                    commit('SET_PRODUCT_NAMES', response.products);
                })
        },

        ADD_TO_CART({commit}, productData) {
            commit('SET_IN_CART', productData)
        },

        REMOVE_FROM_CARD({commit}, index) {
            commit('DEL_FROM_CART', index)
        }
    },

    getters: {
        GOODS_BY_GROUPS(state) {
            return state.goodsByGroups;
        },

        CART(state) {
            return state.cart
        }
    }
})

export default store;