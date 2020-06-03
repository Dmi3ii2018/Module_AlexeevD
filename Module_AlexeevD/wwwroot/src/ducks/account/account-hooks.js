import { useSelector, useDispatch } from 'react-redux';
import { AccountActionCreator } from './account-actions';
import { useCallback } from 'react';
import { createSelector } from 'reselect';

export const useAccountStore = () => {
    const dispatch = useDispatch();

    const totalSum = useSelector(createSelector(
        state => state.accountReducer,
        accountReducer => {
            const initialValue = 0;
            return accountReducer.accounts.reduce((accumulator, currentValue) => accumulator + currentValue.sum, initialValue);
          }
    ));

    const isLoading = useSelector(createSelector(
        state => state.accountReducer,
        accountReducer => accountReducer.loading
    ));
    const accountsList = useSelector(createSelector(
        state => state.accountReducer,
        accountReducer => accountReducer.accounts
    ));

    const currentAccountId = useSelector(createSelector(
        state => state.accountReducer,
        accountReducer => accountReducer.displayedAccountId
    ));

    const currentAccount = useSelector(createSelector(
        state => state.accountReducer,
        accountReducer => {
            if (!accountReducer.accounts.length) {
                return false;
            }
            return accountReducer.accounts.find((account) => account.accountId == currentAccountId);
            }
    ));

    const _deleteAccountButtonHandler = useCallback(
        (currentAccount, user) => dispatch(AccountActionCreator.accountDelete({ number: currentAccount.accountNumber, userId: user.id })),
        [dispatch]
    )

    const _setDisplayedAccount = useCallback(
        (id) => dispatch(AccountActionCreator.accountSetDisplayed(id)),
        [dispatch]
    )

    const _openNewAccount = useCallback(
        (id) => dispatch(AccountActionCreator.accountOpenNew(id)),
        [dispatch]
    )

    const _putFund = useCallback(
        (value) => dispatch(AccountActionCreator.accountPutFund( value )),
        [dispatch]
    )

    const _makeTransaction = useCallback(
        (value) => dispatch(AccountActionCreator.accountMakeTransaction(value)),
        [dispatch]
    )

    return {
        totalSum,
        isLoading,
        accountsList,
        currentAccountId,
        currentAccount,
        deleteAccountButtonHandler: _deleteAccountButtonHandler,
        setDisplayedAccount: _setDisplayedAccount,
        openNewAccount: _openNewAccount,
        putFund: _putFund,
        makeTransaction: _makeTransaction
    }
}