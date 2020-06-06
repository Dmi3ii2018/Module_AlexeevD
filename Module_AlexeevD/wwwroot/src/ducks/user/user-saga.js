import { put, call, take, takeEvery } from 'redux-saga/effects';
import { UserActionCreator, UserActionType } from './userActions';
import { AccountActionCreator } from '../account/account-actions';
import { TemplateActionCreator } from '../payment-template/template-actions';
import { fetchToken } from './fetchToken';
import { fetchUser } from './fetchUser';
import { fetchAccount } from '../account/fetchAccounts';
import { fetchTemplate } from '../payment-template/template-fetch';

function* authorize(action) {
  try {
    const token = yield call(fetchToken, action);
    return token.data.token
  } catch(error) {
    console.log('token error: ', error);
  }
}

function* loginFlow() {
  while (true) {
    const {payload} = yield take(UserActionType.GET_USER_REQUEST)
    const token = yield call(authorize, { login: payload.login, password: payload.password })

    if (token) {
      yield localStorage.setItem('token', token);
      const user = yield call(fetchUser, payload.login);

      const accounts = yield call(fetchAccount, user.data.id);
      const templates = yield call(fetchTemplate, user.data.id);

      if (accounts.data.length) {
        yield put(AccountActionCreator.accountGetSuccess(accounts.data));
        yield put(AccountActionCreator.accountSetDisplayed(accounts.data[0].accountId));
      }

      if (templates.data.length) {
        yield put(TemplateActionCreator.getTemplateSuccess(templates.data))
      }

      yield put(UserActionCreator.getUserSuccess(user.data));

      yield take(UserActionType.LOG_OUT)
      yield localStorage.setItem('token', null);
    } else {
      yield put(UserActionCreator.getUserError());
    }
  }
}

export { loginFlow };

