import React from 'react';
import { Row, Col } from 'antd';
import { AccountOperation } from './account-operation';
import { AccountsList } from './accounts-list';

export const AccountSection = () => (
  <Row style={{marginTop: "120px", backgroundColor: '#F4F8FE', padding: '0 100px'}}>
    <AccountOperation />
    <AccountsList />
  </Row>
);
