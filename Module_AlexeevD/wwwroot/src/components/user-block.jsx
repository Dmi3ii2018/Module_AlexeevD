import React from 'react'
import { Row, Col, Avatar } from 'antd';
import { Link } from 'react-router-dom';
import { SettingTwoTone, UnlockTwoTone } from '@ant-design/icons';
import { useUserStore } from '../ducks/user/user-hooks';

export const UserBlock = () => {
  const { userName, logOut } = useUserStore();

  const logOutHandler = () => {
    logOut();
  };

    return (
        <Col style={{display: "flex"}}>
          <Row style={{flexDirection: "column", alignItems: "flex-end"}}>
            <span className="greetings">Здравствуйте,</span>
            <span className="greetings greetings__name">{userName}</span>
            <Col flex={1}>
              <SettingTwoTone twoToneColor="#ffffff" style={{ fontSize: '20px', marginRight: '10px', marginTop: '5px' }} />
              <Link to="/Auth/SignIn" onClick={logOutHandler}>
                <UnlockTwoTone
                  twoToneColor="#ffffff"
                  style={{ fontSize: '20px' }}
                />
              </Link>
            </Col>
          </Row>
            <Col flex={1}>
              <Avatar style={{
                backgroundColor: '#ffbf00',
                width: '70px',
                height: '70px',
                marginLeft: '30px',
                fontSize: '36px',
                paddingTop: '16px'
                }}>U</Avatar>
            </Col>
        </Col>
    )
}
