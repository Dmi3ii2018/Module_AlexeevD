import { api } from '../../index';

export const fetchUser = (login) => api.get(`/User/GetUser/${login}`, {
  headers: {
    Authorization: `Bearer ${localStorage.getItem('token')}`,
  },
});
