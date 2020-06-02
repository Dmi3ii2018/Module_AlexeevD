import { combineReducers } from 'redux';
import { userReducer } from './users-reducer';
import { newUserReducer } from './newuser-reducer';
import { accountReducer } from './account-reducer';
import { accountHistoryReducer } from './account-history-reducer';

export const rootReducer = combineReducers({
  userReducer,
  newUserReducer,
  accountReducer,
  accountHistoryReducer,
});
