import Api from '@/services/Api'

export default {
  async register (credentials) {
    let response = await Api().post('register', credentials)
    return response
  },
  async login (credentials) {
    let response = await Api().post('login', credentials)
    return response
  }
}
