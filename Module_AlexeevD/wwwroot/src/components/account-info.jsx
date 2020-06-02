import React from 'react';
import { Row, Col } from 'antd';
import { AccountTransactions } from './account-transactions';
import { Feedback } from './feedback';

export const AccountInfo = () => (
  <Row>
    <AccountTransactions />
    <Feedback />
  </Row>
);
