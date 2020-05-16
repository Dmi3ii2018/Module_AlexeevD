import { userReducer } from "./users-reducer";
import { combineReducers } from "redux";

export const rootReducer = combineReducers({ userReducer });