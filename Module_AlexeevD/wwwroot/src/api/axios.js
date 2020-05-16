import axios from 'axios';
import { ActionCreator } from "../actions/userActions";
import { Redirect } from "react-router-dom";
import React from 'react';

export const createAPI = (dispatch) => {
    const api = axios.create({
        baseURL: `https://localhost:44314/`,
        timeout: 1000 * 10,
        withCredentials: true,
    });

    const onSuccess = (response) => response;
    const onFail = (err) => {
        if (err.response.status === 401) {
            console.log('Look here, 401 error!')
            //dispatch(ActionCreator.requireAuthorization(true));
            // return <Redirect to="/login" />;
        }
        console.log(err.response);
        console.log(err);
        return err;
    };

    api.interceptors.response.use(onSuccess, onFail);

    return api;

};