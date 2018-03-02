import Vue from 'vue'
import Vuex from 'vuex'
import Todos from './components/Todos.vue'

import storeTodo from './store/todos'

Vue.use(Vuex)

//config for axios
window.axios = require('axios')
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'
let token = document.head.querySelector('meta[name="csrf-token"]')
if (token) {
    window.axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content
}

const store = new Vuex.Store({
    modules: {
        storeTodo,
    }
})

new Vue({
    store,
    template: '<Todos/>',
    components: { Todos }
}).$mount('#root')
