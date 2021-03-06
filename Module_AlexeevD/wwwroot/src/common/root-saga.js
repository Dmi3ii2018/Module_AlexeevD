import { all } from 'redux-saga/effects';
import { loginFlow } from '../ducks/user/user-saga';
import { signUpSaga } from '../ducks/newUser/signup-saga';
import { putFundSaga, transactionSaga, createAccountSaga, deleteAccountSaga } from '../ducks/account/account-saga';
import { accountHistorySaga } from '../ducks/accountHistory/account-history.saga';
import { createTemplatesSaga } from '../ducks/payment-template/template-saga';

function* rootSaga() {
  yield all([
    signUpSaga(),
    putFundSaga(),
    transactionSaga(),
    loginFlow(),
    accountHistorySaga(),
    createAccountSaga(),
    deleteAccountSaga(),
    createTemplatesSaga(),
  ]);
}

export default rootSaga;
