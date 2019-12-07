import {
  LOGIN
} from '@/store/mutation-types'
import utils from '@/utils'

export default {
  async login (context, { stuId, password }) {
    return utils.request({
      invoke: utils.api.login,
      params: {
        stuId: stuId,
        password: password.toString(),
        avatar: '',
        name: ''
      }
    })
      .then(res => {
        if (res.status === 'true' || res.status === 'false') {
          context.commit(LOGIN, {
            stuId: res.userInfo.id,
            identity: res.userInfo.identity
          })
          return Promise.resolve(true)
        } else {
          return Promise.resolve(false)
        }
      })
  }
}
