import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import action from './actions'
import getters from './getters'

Vue.use(Vuex)

const state = {
    loginState: false,
    userId: null,
    identity: null // 1 for student; 0 for 管理员
}

export default new Vuex.Store({
    state: state,
    mutations: mutations,
    actions: action,
    getters: getters
})