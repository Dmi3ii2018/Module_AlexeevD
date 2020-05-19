import { all } from 'redux-saga/effects';
import { userSaga } from './user-saga';
import { signUpSaga } from './signup-saga';
import { accountSaga } from './account-saga';

function* rootSaga() {
    yield all([
        userSaga(),
        signUpSaga(),
    ]);
}

export default rootSaga;