import React from 'react';
import {Link} from "react-router-dom";
import { Row, Col, Statistic, Avatar } from 'antd';
import { SettingFilled, LogoutOutlined }from '@ant-design/icons';
import moment from 'moment';

export const MainInfo = () => {
    const mainStyle = {
        padding: '20px',
    }
    return (
        <Row style={mainStyle}>
            <Col span={12}>
                <Statistic value={101893} precision={2} />
            </Col>
            <Col flex={1}>
                <Statistic value={moment().format('M/DD/YYYY')} precision={2} />
            </Col>
            <Col flex={1}>Имя</Col>
            <Col flex={1}>
                <SettingFilled style={{ fontSize: '20px' }} />
            </Col>
            <Col flex={1}>
                <Link to='/Auth/SignIn'>
                    <Avatar style={{ backgroundColor: '#ffbf00' }}>U</Avatar>
                </Link>
            </Col>
            <Col flex={1}>
                <LogoutOutlined style={{ fontSize: '20px' }} />
            </Col>
        </Row>
    )
}