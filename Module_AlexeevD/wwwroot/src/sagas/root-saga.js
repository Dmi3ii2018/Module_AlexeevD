import { all } from 'redux-saga/effects';
import { userSaga } from './user-saga';
import { signUpSaga } from './signup-saga';
import { putFundSaga } from './put-fund-saga';
import { transactionSaga } from './transaction-saga';

function* rootSaga() {
    yield all([
        userSaga(),
        signUpSaga(),
        putFundSaga(),
        transactionSaga(),
    ]);
}

export default rootSaga;