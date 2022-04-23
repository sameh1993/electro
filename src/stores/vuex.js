import { createStore } from "vuex"

const store = createStore({
    state: {
        counter : 2
    },
    getters: {
        getCounter (state) {
            return state.counter + 2
        }
    },
    mutations: {
        updateCounter( state ) {
            state.counter++
        },
        decreament (state) {
            state.counter--
        }
    },
    actions: {
        
    }
})


export default store