import { makeAutoObservable } from 'mobx'
import { http } from '@/utils'

class LoginStore {
  token = ''
  constructor() {
    makeAutoObservable(this)
  }

  login = async ({ mobile, code }) => {
    const params = {
      mobile,
      code
    }
    const res = await http.post('http://geek.itheima.net/v1_0/authorizations', params)
    this.token = res.data.token
  }
}

export default LoginStore
