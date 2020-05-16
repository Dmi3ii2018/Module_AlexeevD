import { put, call, takeEvery } from 'redux-saga/effects';
import { UserActionType } from '../actions/userActions';
import { fetchToken } from '../api/fetchToken';

function* getUser(action) {
    try {
        const token = yield call(fetchToken, action.payload);
        console.log(token);
    } catch {
        console.log('Hey, look, generator error!')
    }
}

function* userSaga() {
    yield takeEvery(UserActionType.GET_USER_REQUEST, getUser)
}

export { userSaga };