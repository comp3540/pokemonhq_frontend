import Api from '@/services/Api';
export default {
    async save(state: any) {
        const response = await Api().post('api/state', state);
        return response.data;
    },

    async get() {
        const response = await Api().get('api/state');
        return response.data;
    },
};