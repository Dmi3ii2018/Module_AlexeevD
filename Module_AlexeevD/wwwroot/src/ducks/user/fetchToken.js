import { api } from '../../index';

export const fetchToken = ({ login, password }) => api.post('/Auth/SignIn', {
  Login: login,
  Password: password,
})
  .catch((err) => {
    throw new Error(err.message);
  });
