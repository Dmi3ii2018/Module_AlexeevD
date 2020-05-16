import { api } from '../index.js';

export const fetchToken = ({ login, password }) => {
    return api.post(`/Auth/SignIn`, {
        Login: login,
        Password: password,
    })
        .then(token => localStorage.setItem('token', token.data.token))
        .catch(err => {
            console.log(err);
            throw new Error(err.message);
        });
}