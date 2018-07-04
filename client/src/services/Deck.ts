import Api from '@/services/Api';
export default {
  async save (deck) {
    let response = await Api().post('deck', deck);
    return response;
  },

  async get () {
    let response = await Api().get('deck');
    return response;
  }
};
