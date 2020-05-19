import React from 'react';
import { put, call, takeEvery } from 'redux-saga/effects';
import { AccountActionType, AccountActionCreator } from '../actions/account-actions';
import { fetchAccount } from '../api/fetchAccounts';
import { Redirect } from 'react-router-dom';

function* getAccounts(action) {
    try {
        // yield put(AccountActionCreator.accountFetch);
        // const accounts = yield call(fetchAccount, action.payload);
        // put(AccountActionCreator.accountGetSuccess(accounts));
    } catch(error) {
        // return <Redirect to='/Auth/SignIn' />
        // put(AccountActionCreator.accountGetError(error));
        // console.log(error);
    }
}

function* accountSaga() {
    yield takeEvery(AccountActionType.ACCOUNT_FETCH, getAccounts)
}

export {accountSaga}