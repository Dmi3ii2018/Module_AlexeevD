import { userSaga } from './user-saga';
import { all } from 'redux-saga/effects';
import { signUpSaga } from './signup-saga';
import { putFundSaga } from './put-fund-saga';
import { createAccountSaga } from './new-account-saga';
import { transactionSaga } from './transaction-saga.js';
import { accountHistorySaga } from './account-history.saga';
import { deleteAccountSaga } from './delete-account-saga';

function* rootSaga() {
    yield all([
        userSaga(),
        signUpSaga(),
        putFundSaga(),
        transactionSaga(),
        accountHistorySaga(),
        createAccountSaga(),
        deleteAccountSaga(),
    ]);
}

export default rootSaga;