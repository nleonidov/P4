import api from './apiConfig';

export const getAllToppings = async () => {
    const resp = await api.get('/toppings');
    return resp.data;
}