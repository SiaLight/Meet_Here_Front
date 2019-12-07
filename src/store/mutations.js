import {
  LOGIN,
  LOGOUT
} from './mutation-types'

export default {
  [LOGIN] (state, { stuId, identity }) {
    state.loginState = true
    state.stuId = stuId
    state.identity = identity
  },
  [LOGOUT] (state) {
    state.loginState = false
    state.stuId = null
    state.identity = null
  }
}
