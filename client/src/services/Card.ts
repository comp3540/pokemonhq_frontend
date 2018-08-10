import Api from '@/services/Api';
export default {
  async get(){
    const response = await Api().get('prolog/cards.json');
    return response.data;
  }
};