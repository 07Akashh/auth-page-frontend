import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'https://auth-page-backend-xglx.onrender.com/api',
    // timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    },
    withCredentials: true,
});

export default apiClient;
