import { api } from '../index.js';

export const fetchToken = ({ login, password }) => api.post('/Auth/SignIn', {
  Login: login,
  Password: password,
})
  // .then((token) => localStorage.setItem('token', token.data.token))
  .catch((err) => {
    throw new Error(err.message);
  });
