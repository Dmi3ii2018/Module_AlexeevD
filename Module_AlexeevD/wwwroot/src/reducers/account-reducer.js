import { AccountActionType } from '../actions/account-actions';

const initialState = {
  displayedAccountId: 0,
  accounts: [],
  error: null,
  loading: false,
};

export const accountReducer = (state = initialState, action) => {
  switch (action.type) {
    case AccountActionType.ACCOUNT_FETCH:
      return { ...state, loading: true };
    case AccountActionType.ACCOUNT_GET_SUCCESS:
      const accounts = action.payload;

      return {
        ...state,
        loading: false,
        accounts,
      };
    case AccountActionType.ACCOUNT_GET_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case AccountActionType.ACCOUNT_SET_DISPLAYED:
      return { ...state, displayedAccountId: action.payload };
    default:
      return state;
  }
};
