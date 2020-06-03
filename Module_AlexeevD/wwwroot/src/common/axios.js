import axios from 'axios';
import { Redirect } from 'react-router-dom';
import React from 'react';
import { UserActionCreator } from '../ducks/user/userActions';

export const createAPI = (dispatch) => {
  const api = axios.create({
    baseURL: 'https://localhost:5001/',
    timeout: 1000 * 10,
    withCredentials: true,
  });

  const onSuccess = (response) => response;
  const onFail = (err) => {
    if (err.response.status === 401) {
      dispatch(UserActionCreator.getUserError());
      return <Redirect to="/Auth/SignIn" />;
    }
    if (err.response.status === 400 && err.response.data.authError) {
      const error = err.response.data.authError;
      dispatch(UserActionCreator.setError(error));
    }
    console.log(err.response);
    console.log(err);
    return err;
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};
