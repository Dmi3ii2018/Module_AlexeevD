import { api } from '../index.js';

export const fetchAccountHistory = ( accountNumber ) => {
    return api.get(`/Account/GetAccountHistory/${accountNumber}`, {
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token')
          }
    });
}