import { combineReducers } from 'redux';
import { userReducer } from '../ducks/user/users-reducer';
import { newUserReducer } from '../ducks/newUser/newuser-reducer';
import { accountReducer } from '../ducks/account/account-reducer';
import { accountHistoryReducer } from '../ducks/accountHistory/account-history-reducer';

export const rootReducer = combineReducers({
  userReducer,
  newUserReducer,
  accountReducer,
  accountHistoryReducer,
});