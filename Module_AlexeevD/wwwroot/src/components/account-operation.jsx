import React from 'react';
import { Col } from 'antd';
import { useAccountStore } from '../ducks/account/account-hooks'
import { CurrentAccount } from './current-account';
import { AccountActions } from './account-actions';

export const AccountOperation = () => {
  const { currentAccount } = useAccountStore();

  return (
    <Col
      span={18}
    >
      <AccountActions currentAccount={currentAccount} />
    </Col>
  );
};
