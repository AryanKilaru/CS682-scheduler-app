import axios from 'axios';

const BASE_URL = 'http://localhost:8000/';

const api = axios.create({
    baseURL: BASE_URL,
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
    },
});

export const signup = (formData) => api.post('signup/', formData);
export const login = (formData) => api.post('login/', formData);