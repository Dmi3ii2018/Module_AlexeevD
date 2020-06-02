import React from 'react';
import { Col } from 'antd';
import { useSelector } from 'react-redux';
import { CurrentAccount } from './current-account';
import { AccountActions } from './account-actions';

export const AccountOperation = () => {
  const colStyle = {
    border: '1px solid #000',
    padding: '20px 30px',
  };

  const currentAccountId = useSelector(({ accountReducer }) => accountReducer.displayedAccountId);
  const currentAccount = useSelector(({ accountReducer }) => {
    if (!accountReducer.accounts.length || !currentAccountId) {
      return false;
    }
    const data = accountReducer.accounts.find((account) => account.accountId == currentAccountId);

    return data;
  });

  return (
    <Col
      span={18}
      style={colStyle}
    >
      <CurrentAccount currentAccount={currentAccount} />
      <AccountActions currentAccount={currentAccount} />
    </Col>
  );
};
