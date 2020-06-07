import React from 'react';
import { Link, Redirect, withRouter } from 'react-router-dom';
import { Row, Col, Statistic, Avatar } from 'antd';
import { useAccountStore } from '../ducks/account/account-hooks';
import { UserBlock } from './user-block';
import { CurrentAccount } from './current-account';

const MainInfo = () => {
  const { totalSum, currentAccount } = useAccountStore();

  const mainStyle = {
    padding: '20px 100px',
    backgroundColor: '#4498D8',
    height: '106px',
  };

  const sumStyle = {
    marginTop: '40px',
    fontStyle: 'normal',
    fontWight: 'bold',
    fontSize: '25px',
    lineHeight: '24px',
    letterSpacing: '-0.05em',
  }

  return (
    <Row style={mainStyle} justify="center">
      <Col span={24} style={{display: "flex", justifyContent: 'flex-end'}}>
        <div className="header-card">
          <p className="header-card__name">Баланс:</p>
          <Statistic value={totalSum} precision={2} style={sumStyle} />
        </div>

        <CurrentAccount currentAccount={currentAccount} />
        <UserBlock />
      </Col>
    </Row>
  );
};

export default withRouter(MainInfo);
