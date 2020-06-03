import { useSelector, useDispatch } from 'react-redux';
import { convertHistory } from '../utils/convert-account-history';
import { AccountHistoryActionCreator } from '../actions/account-history-actions';
import { useCallback } from 'react';


export const useAccountHistoryStore = () => {
    const dispatch = useDispatch();

    const isLoading = useSelector(({ accountHistoryReducer }) => accountHistoryReducer.loading);

    const accountOperations = useSelector(({ accountHistoryReducer }) => {
        if (accountHistoryReducer.accountHistory.length > 0) {
            return convertHistory(accountHistoryReducer.accountHistory);
        }
        return [];
        });

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