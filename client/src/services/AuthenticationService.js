import Api from '@/services/Api'

export default {
  async register (credentials) {
    await Api().post('register', credentials)
  }
}
