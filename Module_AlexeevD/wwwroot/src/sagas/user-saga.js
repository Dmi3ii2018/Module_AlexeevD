import { put, call, takeEvery } from 'redux-saga/effects';
import { UserActionCreator, UserActionType } from '../actions/userActions';
import { fetchToken } from '../api/fetchToken';
import { fetchUser } from '../api/fetchUser';

function* getUser(action) {
    try {
        yield call(fetchToken, action.payload);
        yield console.log(localStorage.getItem('token'));

        const user = yield call(fetchUser, action.payload.login);
        yield put(UserActionCreator.getUserSuccess(user.data));

    } catch(error) {
        console.log('Hey, look, generator error!', error)
    }
}

function* userSaga() {
    yield takeEvery(UserActionType.GET_USER_REQUEST, getUser)
}

export { userSaga };