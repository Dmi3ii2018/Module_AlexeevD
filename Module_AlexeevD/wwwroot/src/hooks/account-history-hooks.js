import { useSelector, useDispatch } from 'react-redux';
import { convertHistory } from '../utils/convert-account-history';
import { AccountHistoryActionCreator } from '../actions/account-history-actions';
import { useCallback } from 'react';
import { createSelector } from 'reselect';

export const useAccountHistoryStore = () => {
    const dispatch = useDispatch();

    const isLoading = useSelector(createSelector(
        state => state.accountHistoryReducer,
        accountHistoryReducer => accountHistoryReducer.loading
    ));

    const accountOperations = useSelector(createSelector(
        state => state.accountHistoryReducer,
        accountHistoryReducer => {
            if (accountHistoryReducer.accountHistory.length > 0) {
                return convertHistory(accountHistoryReducer.accountHistory);
            }
            return [];
            }
    ));

    const _getAccountHistory = useCallback(currentAccount => dispatch(AccountHistoryActionCreator.getAccountHistoryRequest(currentAccount.accountNumber)),
    [dispatch])

    const _getAccountHistorySuccess = useCallback(() => dispatch(AccountHistoryActionCreator.getAccountHistorySuccess([])),
        [dispatch]
    )

    return {
        isLoading,
        accountOperations,
        getAccountHistory: _getAccountHistory,
        getAccountHistorySuccess: _getAccountHistorySuccess
    }
}