import axios from "axios";

const api = axios.create({
    baseURL: import.meta.env.VITE_REACT_APP_API
});

export const useApi = () => ({
    validateToken: async (token: string) => {
        return {
            user: {id: 3, name: 'Goreth', email: 'gorethmanuel@gmial.com'}
        };
        const response = await api.post('/validate', {token});
        return response.data;
    },

    register: async (email: string, password: string) => {
        return {
            user: {id: 3, name: 'Goreth', email: 'gorethmanuel@gmial.com'},
            token: '123456'
        }
        const response = await api.post('/register', {email, password});
        return response.data;
    },

    signin: async (email: string, password: string) => {
        return {
            user: {id: 3, name: 'Goreth', email: 'gorethmanuel@gmial.com'},
            token: '123456'
        }
        const response = await api.post('/signin', {email, password});
        return response.data;
    },

    logout: async () => {
        return { status: true}
        const response = await api.post('/logout');
        return response.data;
    }
})