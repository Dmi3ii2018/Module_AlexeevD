import { put, call, takeEvery } from 'redux-saga/effects';
import { AccountActionCreator, AccountActionType } from '../actions/account-actions';
import { transactionApi, fetchAccount } from '../api/fetchAccounts';

function* makeTransaction(action) {
  try {
    yield put(AccountActionCreator.accountFetch());
    yield call(transactionApi, action.payload);

    const accounts = yield call(fetchAccount, action.payload.userId);
    yield put(AccountActionCreator.accountGetSuccess(accounts.data));
  } catch (error) {
    yield put(AccountActionCreator.accountGetError(error));
  }
}

export function* transactionSaga() {
  yield takeEvery(AccountActionType.ACCOUNT_MAKE_TRANSACTION, makeTransaction);
}
