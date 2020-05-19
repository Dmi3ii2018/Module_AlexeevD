import { userReducer } from "./users-reducer";
import { newUserReducer } from "./newuser-reducer";
import { accountReducer } from './account-reducer';
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
    userReducer,
    newUserReducer,
    accountReducer,
});