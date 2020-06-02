import React, { useEffect } from 'react';
import { Col } from 'antd';
import { AccountHistoryData } from './account-history-data';

export const AccountTransactions = () => (
  <Col style={{ padding: '20px 30px' }} span={18}>
    <AccountHistoryData />
  </Col>
);
