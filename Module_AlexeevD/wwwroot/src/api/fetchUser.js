import { api } from '../index.js';

export const fetchUser = (login) => {
    return api.get(`/User/Get/${login}`, {
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token')
          }
    });
}