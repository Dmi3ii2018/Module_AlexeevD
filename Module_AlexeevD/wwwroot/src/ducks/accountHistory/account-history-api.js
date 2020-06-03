import { api } from '../index';

export const fetchAccountHistory = (accountNumber) => api.get(`/Account/GetAccountHistory/${accountNumber}`, {
  headers: {
    Authorization: `Bearer ${localStorage.getItem('token')}`,
  },
});
