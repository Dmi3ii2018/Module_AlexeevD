import React from 'react';
import { Col, Statistic, Descriptions } from 'antd';

export const CurrentAccount = ({ currentAccount }) => {
  const accountNumberStyle = {
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '25px',
    lineHeight: '24px',
    marginTop: '-5px',
  }

  return (
    <div className="header-card header-card--right">
      <Col span={16}>
        <Statistic style={accountNumberStyle} value={currentAccount ? `${currentAccount.accountNumber}` : 'Счёт:'} />
      </Col>
      <Col span={18}>
        <Descriptions style={{marginTop: '30px'}}>
          <Descriptions.Item label="Баланс">{currentAccount ? currentAccount.sum : 0}</Descriptions.Item>
        </Descriptions>
      </Col>
    </div>
  )
};
