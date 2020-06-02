import { put, call, takeEvery } from 'redux-saga/effects';
import { AccountActionCreator, AccountActionType } from '../actions/account-actions';
import { putFundApi, fetchAccount } from '../api/fetchAccounts';

function* putFund(action) {
  try {
    yield put(AccountActionCreator.accountFetch());
    yield call(putFundApi, action.payload);

    const accounts = yield call(fetchAccount, action.payload.userId);
    yield put(AccountActionCreator.accountGetSuccess(accounts.data));
  } catch (error) {
    yield put(AccountActionCreator.accountGetError(error));
  }
}

export function* putFundSaga() {
  yield takeEvery(AccountActionType.ACCOUNT_PUT_FUND, putFund);
}
