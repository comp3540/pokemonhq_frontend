import Api from '@/services/Api';
export default {
  async save(deck: any) {
    const response = await Api().post('deck', deck);
    return response;
  },

  async get() {
    const response = await Api().get('deck');
    return response;
  },
};
