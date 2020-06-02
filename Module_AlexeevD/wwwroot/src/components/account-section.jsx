import React from 'react';
import { Row, Col } from 'antd';
import { AccountOperation } from './account-operation';
import { AccountsList } from './accounts-list';

export const AccountSection = () => (
  <Row>
    <AccountOperation />
    <AccountsList />
  </Row>
);
