import { all } from 'redux-saga/effects';
import { userSaga } from '../ducks/user/user-saga';
import { signUpSaga } from '../ducks/newUser/signup-saga';
import { putFundSaga, transactionSaga, createAccountSaga, deleteAccountSaga } from '../ducks/account/account-saga';
import { accountHistorySaga } from '../ducks/accountHistory/account-history.saga';

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
