import { AccountHistoryAction } from '../actions/account-history-actions';
import produce from 'immer';

const initialState = {
  accountHistory: [],
  loading: false,
  error: null,
};

export const accountHistoryReducer = (state = initialState, action) =>
 produce(state, draft => {
  switch (action.type) {
    case AccountHistoryAction.ACCOUNT_HISTORY_FETCH:
      draft.loading = true;
      return

    case AccountHistoryAction.GET_ACCOUNT_HISTORY_SUCCESS:
      draft.accountHistory = action.payload;
      draft.loading = false;
      return

    case AccountHistoryAction.GET_ACCOUNT_HISTORY_ERROR:
      draft.error = action.payload;
      draft.loading = false;
      return
    }
 })
