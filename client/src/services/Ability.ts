import Api from '@/services/Api';

export default {
  async get(){
    const response = await Api().get('prolog/abilities.json');
    return response.data;
  }
};