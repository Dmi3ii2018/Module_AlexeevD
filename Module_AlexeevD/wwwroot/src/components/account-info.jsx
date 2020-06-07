import React from 'react';
import { Row } from 'antd';
import { AccountTransactions } from './account-transactions';
import { Feedback } from './feedback';

export const AccountInfo = () => (
  <Row style={{ padding: '0 100px', backgroundColor: '#F4F8FE', paddingBottom: '100px' }}>
    <AccountTransactions />
    <Feedback />
  </Row>
);
