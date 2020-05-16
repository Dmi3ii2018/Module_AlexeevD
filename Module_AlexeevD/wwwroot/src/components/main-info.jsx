import React from 'react';
import { useDispatch } from 'react-redux'
import { Row, Col, Statistic, Spin, Avatar } from 'antd';
import { SettingFilled, LogoutOutlined} from '@ant-design/icons';
import moment from 'moment';
import { UserActionCreator } from '../actions/userActions';
import { connect } from 'react-redux';
import {withRouter, Link, Redirect} from "react-router-dom";

const mapDispatchToProps = {
    getUserRequest: UserActionCreator.getUserRequest,
}

export default class MainInfo extends React.PureComponent {
    render() {
        const mainInoStyle = {
            padding: '20px',
        }

        return (
            <Row style={mainInoStyle}>
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

}
