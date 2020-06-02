import { put, call, takeEvery } from 'redux-saga/effects';
import { AccountHistoryAction, AccountHistoryActionCreator } from '../actions/account-history-actions';
import { fetchAccountHistory } from '../api/account-history-api';

function* getHistory(action) {
  try {
    yield put(AccountHistoryActionCreator.getAccountHistoryFetch());
    const history = yield call(fetchAccountHistory, action.payload);
    yield put(AccountHistoryActionCreator.getAccountHistorySuccess(history.data));
  } catch (error) {
    console.log(error);
    yield put(AccountHistoryActionCreator.getAccountHistoryError());
  }
}

export function* accountHistorySaga() {
  yield takeEvery(AccountHistoryAction.GET_ACCOUNT_HISTORY_REQUEST, getHistory);
}
