import React from 'react';
import { Link, Redirect, withRouter } from 'react-router-dom';
import {
  Row, Col, Statistic, Avatar,
} from 'antd';
import { SettingFilled, LogoutOutlined } from '@ant-design/icons';
import { useSelector, useDispatch } from 'react-redux';
import moment from 'moment';
import { UserActionCreator } from '../actions/userActions';

const MainInfo = () => {
  const mainStyle = {
    padding: '20px',
  };

  const totalSum = useSelector(({ accountReducer }) => {
    const initialValue = 0;

    return accountReducer.accounts.reduce((accumulator, currentValue) => accumulator + currentValue.sum, initialValue);
  });
  const isAuthorized = useSelector(({ userReducer }) => userReducer.isAuthorized);

  const dispatch = useDispatch();

  const userName = useSelector(({ userReducer }) => userReducer.user.name);

  const logOutHandler = () => {
    dispatch(UserActionCreator.logOut());
  };

  if (!isAuthorized) {
    return <Redirect to="/Auth/SignIn" />;
  }

  return (
    <Row style={mainStyle}>
      <Col span={12}>
        <Statistic value={totalSum} precision={2} />
      </Col>
      <Col flex={1}>
        <Statistic value={moment().format('M/DD/YYYY')} precision={2} />
      </Col>
      <Col flex={1} style={{ fontSize: '26px' }}>{userName}</Col>
      <Col flex={1}>
        <SettingFilled style={{ fontSize: '20px' }} />
      </Col>
      <Col flex={1}>
        <Avatar style={{ backgroundColor: '#ffbf00' }}>U</Avatar>
      </Col>
      <Col flex={1}>
        <Link to="/Auth/SignIn" onClick={logOutHandler}>
          <LogoutOutlined
            style={{ fontSize: '20px' }}
          />
        </Link>
      </Col>
    </Row>
  );
};

export default withRouter(MainInfo);
