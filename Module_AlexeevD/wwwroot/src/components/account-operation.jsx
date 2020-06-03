import React from 'react';
import { Col } from 'antd';
import { useAccountStore } from '../ducks/account/account-hooks'
import { CurrentAccount } from './current-account';
import { AccountActions } from './account-actions';

export const AccountOperation = () => {
  const colStyle = {
    border: '1px solid #000',
    padding: '20px 30px',
  };

  const { currentAccount } = useAccountStore();

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
