import { api } from '../index.js';

export const fetchToken = ({ login, password }) => api.post('/Auth/SignIn', {
  Login: login,
  Password: password,
})
  .catch((err) => {
    throw new Error(err.message);
  });
