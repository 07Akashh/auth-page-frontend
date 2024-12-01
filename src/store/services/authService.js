import apiClient from './apiClient';

const authService = {
    login: async (credentials) => {
        const response = await apiClient.post('/user/login', credentials);
        return response.data;
    },
    register: async (userData) => {
        const response = await apiClient.post('/user/register', userData);
        return response.data;
    },
    logout: async () => {
        const response = await apiClient.post(`/user/logout`);
        return response.data;
    },
    getUser: async () => {
        const response = await apiClient.get(`/user`);
        return response.data;
    },
};

export default authService;
