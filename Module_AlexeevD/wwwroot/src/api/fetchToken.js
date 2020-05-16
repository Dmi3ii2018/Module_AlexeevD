import { api } from '../index.js';

export const fetchToken = ({ Login, Password }) => {
    return api.post(`/Auth/SignIn`, {
        Login,
        Password,
    })
        .then(response => console.log(response))
        .catch(err => {
            console.log(err);
            throw new Error(err.message);
        });
}