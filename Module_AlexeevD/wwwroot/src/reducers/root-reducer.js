import { userReducer } from "./users-reducer";
import { newUserReducer } from "./newuser-reducer";
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
    userReducer,
    newUserReducer
});