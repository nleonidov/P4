import api from './apiConfig';

export const getAllYogurts = async () => {
    const resp = await api.get('/yogurts');
    return resp.data;
}

export const getOneYogurt = async (id) => {
    const resp = await api.get(`/yogurts/${id}`);
    return resp.data;
}