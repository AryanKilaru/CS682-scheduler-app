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
export const tasks_create = (formData) => api.post('tasks/', formData);
export const tasks_view = () => api.get('tasks/');
// export const tasks_update = () => api.post('tasks/');
// export const tasks_delete = () => api.post('tasks/');
export const logout = () => api.post('logout/');