import React from 'react';
import { Row, Col, Statistic, Descriptions } from 'antd';

export const CurrentAccount = ({ currentAccount }) => (
  <Row>
    <Col span={16}>
      <Statistic style={{ textDecoration: 'underline' }} value={currentAccount ? `№ ${currentAccount.accountNumber}` : 'Нет открытых счетов'} />
    </Col>
    <Col span={18}>
      <Descriptions>
        <Descriptions.Item label="Баланс">{currentAccount ? currentAccount.sum : 0}</Descriptions.Item>
      </Descriptions>
    </Col>
  </Row>
);
