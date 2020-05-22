import React from 'react';
import { Col } from 'antd';
import { CurrentAccount } from './current-account';
import { AccountActions } from './account-actions';
import { useSelector } from 'react-redux';

export const AccountOperation = () => {
    const colStyle = {
        border: '1px solid #000',
        padding: '20px 30px'
    }

    const currentAccountId = useSelector(({ accountReducer }) => accountReducer.displayedAccountId)
    const currentAccount = useSelector(({ accountReducer }) => {
        if(!accountReducer.accounts.length || !currentAccountId) {
            return false;
        }
        const data = accountReducer.accounts.find(account => account.accountId == currentAccountId);
        console.log(data);
        return data;
    })

    return (
            <Col
                span={18}
                style={colStyle}
            >
                <CurrentAccount currentAccount={ currentAccount } />
                <AccountActions currentAccount={ currentAccount } />
            </Col>
    )
}
