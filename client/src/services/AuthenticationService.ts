import Api from '@/services/Api';

export default {
  async register(credentials: any) {
    const response = await Api().post('api/register', credentials);
    return response;
  },
  async login(credentials: any) {
    const response = await Api().post('api/login', credentials);
    return response;
  },
};
