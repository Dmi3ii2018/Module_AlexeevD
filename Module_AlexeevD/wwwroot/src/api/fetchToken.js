import { api } from '../index.js';

export const fetchToken = ({ login, password }) => {
    return api.post(`/Auth/SignIn`, {
        Login: login,
        Password: password,
    })
        .then(token => localStorage.setItem('token', token.data.token))
        .catch(err => {
            console.dir(err);
            console.log(err.response);
            throw new Error(err.message);
        });
}