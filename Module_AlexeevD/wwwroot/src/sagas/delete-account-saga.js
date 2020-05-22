import { put, call, takeEvery } from 'redux-saga/effects';
import { AccountActionCreator, AccountActionType } from '../actions/account-actions';
import { deleteAccountApi, fetchAccount } from '../api/fetchAccounts';

function* deleteAccount(action) {
    try {
        yield call(deleteAccountApi, action.payload.number);

        const accounts = yield call(fetchAccount, action.payload);
        yield put(AccountActionCreator.accountGetSuccess(accounts.data.userId));
    } catch(error) {
        yield put(AccountActionCreator.accountGetError(error));
    }
}

export function * deleteAccountSaga() {
    yield takeEvery(AccountActionType.ACCOUNT_DELETE, deleteAccount);
}