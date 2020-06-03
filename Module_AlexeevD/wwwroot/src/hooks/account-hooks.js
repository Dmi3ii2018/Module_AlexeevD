import { useSelector, useDispatch } from 'react-redux';
import { AccountActionCreator } from '../actions/account-actions';
import { useCallback } from 'react';

export const useAccountStore = () => {
    const dispatch = useDispatch();

    const totalSum = useSelector(({ accountReducer }) => {
        const initialValue = 0;

        return accountReducer.accounts.reduce((accumulator, currentValue) => accumulator + currentValue.sum, initialValue);
      });

    const isLoading = useSelector(({ accountReducer }) => accountReducer.loading);
    const accountsList = useSelector(({ accountReducer }) => accountReducer.accounts);

    const currentAccountId = useSelector(({ accountReducer }) => accountReducer.displayedAccountId);

    const currentAccount = useSelector(({ accountReducer }) => {
    if (!accountReducer.accounts.length) {
        return false;
    }
    return accountReducer.accounts.find((account) => account.accountId == currentAccountId);
    });

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