import { api } from '../index.js';

export const fetchAccount = (UserId) => {
    return api.get(`/User/GetAccount/${UserId}`, {
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token')
          }
    });
}
