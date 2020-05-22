import { put, call, takeEvery } from 'redux-saga/effects';
import { NewUserActionCreator, NewUserActionType } from '../actions/newuser-actions';
import { fetchNewUser } from '../api/fetchUser';

function* getNewUser(action) {
    try {
        yield put(NewUserActionCreator.fetchNewUser());

        yield call(fetchNewUser, action.payload);

        yield put(NewUserActionCreator.getNewUserSuccess());

    } catch(error) {
        console.log('Hey, look, generator error!', error)
        yield put(NewUserActionCreator.getNewUserError(error));
    }
}

function* signUpSaga() {
    yield takeEvery(NewUserActionType.GET_NEW_USER_REQUEST, getNewUser)
}

export { signUpSaga };