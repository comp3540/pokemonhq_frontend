import Api from '@/services/Api';
export default {
  async save(deck: any) {
    const response = await Api().post('api/deck', deck);
    return response;
  },

  async get() {
    const response = await Api().get('api/deck');
    return response;
  },
};
