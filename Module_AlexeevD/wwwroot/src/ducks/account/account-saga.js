import { put, call, takeEvery } from 'redux-saga/effects';
import { AccountActionCreator, AccountActionType } from './account-actions';
import { deleteAccountApi, fetchAccount, createNewAccountApi, putFundApi, transactionApi } from './fetchAccounts';

function* deleteAccount(action) {
  try {
    yield call(deleteAccountApi, action.payload.number);

    const accounts = yield call(fetchAccount, action.payload.userId);

    if (accounts.data.length) {
      yield put(AccountActionCreator.accountSetDisplayed(accounts.data[0].accountId));
      yield put(AccountActionCreator.accountGetSuccess(accounts.data));
    } else {
      yield put(AccountActionCreator.accountSetDisplayed(0));
      yield put(AccountActionCreator.accountGetSuccess([]));
    }
  } catch (error) {
    yield put(AccountActionCreator.accountGetError(error));
  }
}

export function* deleteAccountSaga() {
  yield takeEvery(AccountActionType.ACCOUNT_DELETE, deleteAccount);
}


function* createAccount(action) {
    try {
      yield call(createNewAccountApi, action.payload);

      const accounts = yield call(fetchAccount, action.payload);

      if (accounts.data.length) {
        yield put(AccountActionCreator.accountSetDisplayed(accounts.data[0].accountId));
        yield put(AccountActionCreator.accountGetSuccess(accounts.data));
      } else {
        yield put(AccountActionCreator.accountSetDisplayed(0));
        yield put(AccountActionCreator.accountGetSuccess([]));
      }
    } catch (error) {
      yield put(AccountActionCreator.accountGetError(error));
    }
  }

  export function* createAccountSaga() {
    yield takeEvery(AccountActionType.ACCOUNT_OPEN_NEW, createAccount);
  }

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