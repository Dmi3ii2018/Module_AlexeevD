import { put, call, takeEvery } from 'redux-saga/effects';
import { AccountActionCreator, AccountActionType } from '../actions/account-actions';
import { createNewAccountApi, fetchAccount } from '../api/fetchAccounts';

function* createAccount(action) {
    try {
        yield call(createNewAccountApi, action.payload);

        const accounts = yield call(fetchAccount, action.payload);

        if(accounts.data.length) {
            yield put(AccountActionCreator.accountSetDisplayed(accounts.data[0].accountId));
            yield put(AccountActionCreator.accountGetSuccess(accounts.data));
        } else {
            yield put(AccountActionCreator.accountSetDisplayed(0));
            yield put(AccountActionCreator.accountGetSuccess([]));
        }

    } catch(error) {
        yield put(AccountActionCreator.accountGetError(error));
    }
}

export function * createAccountSaga() {
    yield takeEvery(AccountActionType.ACCOUNT_OPEN_NEW, createAccount);
}