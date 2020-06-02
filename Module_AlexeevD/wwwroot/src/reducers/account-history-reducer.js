import { AccountHistoryAction } from '../actions/account-history-actions';

const initialState = {
  accountHistory: [],
  loading: false,
  error: null,
};

export const accountHistoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case AccountHistoryAction.ACCOUNT_HISTORY_FETCH:
      return { ...state, loading: true };
    case AccountHistoryAction.GET_ACCOUNT_HISTORY_SUCCESS:
      return {
        ...state,
        accountHistory: action.payload,
        loading: false,
      };
    case AccountHistoryAction.GET_ACCOUNT_HISTORY_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
