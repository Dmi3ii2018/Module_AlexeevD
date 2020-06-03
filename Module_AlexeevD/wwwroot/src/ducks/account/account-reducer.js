import { AccountActionType } from './account-actions';
import produce from 'immer';

const initialState = {
  displayedAccountId: 0,
  accounts: [],
  error: null,
  loading: false,
};

export const accountReducer = (state = initialState, action) =>
 produce(state, draft => {
  switch (action.type) {
    case AccountActionType.ACCOUNT_FETCH:
      draft.loading = true;
      return

    case AccountActionType.ACCOUNT_GET_SUCCESS:
      const accounts = action.payload;
      draft.loading = false;
      draft.accounts = accounts;
      return

    case AccountActionType.ACCOUNT_GET_ERROR:
      draft.loading = false;
      draft.error = action.payload
      return

    case AccountActionType.ACCOUNT_SET_DISPLAYED:
      draft.displayedAccountId = action.payload
      return
  }
 })
