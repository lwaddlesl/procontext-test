import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        list1: {
            item1: {
                count: 12,
                color: '#f2d9d9'
            },
            item2: {
                count: 17,
                color: '#755387'
            },
            item3: {
                count: 22,
                color: '#ff0000'
            },
            item4: {
                count: 32,
                color: '#af0000'
            },
            item5: {
                count: 32,
                color: '#aaff22'
            },
        },
        list2: {
            item1: {
                count: 22,
                color: '#ff0000'
            },
            item2: {
                count: 52,
                color: '#aaff22'
            },
            item3: {
                count: 32,
                color: '#ff0000'
            },
            item4: {
                count: 22,
                color: '#ff0000'
            },
        },
        list3: {
            item1: {
                count: 5,
                color: '#aaff22'
            },
            item2: {
                count: 6,
                color: '#ff0000'
            },
            item3: {
                count: 25,
                color: '#ff0000'
            },
            item4: {
                count: 2,
                color: '#aaff22'
            },
        },
    },
    actions: {

    },
    mutations: {
        setColor(state, color) {
            state.list1.item1.color = color
        },
    },
    getters: {}
})

export default store
