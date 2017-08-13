import Vuex from "vuex"
import Vue from "vue"

Vue.use(Vuex)

import module_index from "./module/module_index"

var store = new Vuex.Store({
    modules: [
        module_index
    ]

})
export default store