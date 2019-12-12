import {LOGIN,LOGOUT} from "./mutation-types";
export default {
    [LOGIN](state,{userId,identity}){
        state.loginState = true
        state.userId = userId
        state.identity = identity
    },
    [LOGOUT] (state) {
        state.loginState = false
        state.userId = null
        state.identity = null
    }
}