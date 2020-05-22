import { put, call, takeEvery } from 'redux-saga/effects';
import { UserActionCreator, UserActionType } from '../actions/userActions';
import { AccountActionCreator } from '../actions/account-actions';
import { fetchToken } from '../api/fetchToken';
import { fetchUser } from '../api/fetchUser';
import { fetchAccount } from '../api/fetchAccounts';

function* getUser(action) {
    try {
        yield call(fetchToken, action.payload);

        const user = yield call(fetchUser, action.payload.login);

        const accounts = yield call(fetchAccount, user.data.id);

        if(accounts.data.length) {
            yield put(AccountActionCreator.accountGetSuccess(accounts.data));
            yield put(AccountActionCreator.accountSetDisplayed(accounts.data[0].accountId))
        }

        yield put(UserActionCreator.getUserSuccess(user.data));

    } catch(error) {
        console.log('generator error: ', error);
        yield put(UserActionCreator.getUserError());
    }
}

function* userSaga() {
    yield takeEvery(UserActionType.GET_USER_REQUEST, getUser)
}

export { userSaga };