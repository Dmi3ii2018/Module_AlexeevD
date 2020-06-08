import axios from 'axios';
import { UserActionCreator } from '../ducks/user/userActions';

export const createAPI = (dispatch) => {
  const api = axios.create({
    baseURL: 'https://localhost:44314/',
    timeout: 1000 * 10,
    withCredentials: true,
  });

  const onSuccess = (response) => response;
  const onFail = (err) => {
    if (err.response.status === 401) {
      dispatch(UserActionCreator.getUserError());
    }
    if (err.response.status === 400 && err.response.data.authError) {
      const error = err.response.data.authError;
      dispatch(UserActionCreator.setError(error));
    }
    return err;
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};
