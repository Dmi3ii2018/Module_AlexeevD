import React from 'react';
import { useDispatch } from 'react-redux'
import { Row, Col, Statistic, Spin, Avatar } from 'antd';
import { SettingFilled, LogoutOutlined} from '@ant-design/icons';
import moment from 'moment';
import { UserActionCreator } from '../actions/userActions';
import { connect } from 'react-redux';

const expml = {
    Login: 'aaaasda@pri.ru',
    Password: 'ssss',
}

const mapDispatchToProps = {
    getUserRequest: UserActionCreator.getUserRequest,
}

//const dispatch = useDispatch();

class MainInfo extends React.PureComponent {
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
                    <SettingFilled style={{ fontSize: '20px' }} onClick={() => this.props.getUserRequest(expml)} />
                </Col>
                <Col flex={1}>
                    <Avatar style={{ backgroundColor: '#ffbf00' }}>U</Avatar>
                </Col>
                <Col flex={1}>
                    <LogoutOutlined style={{ fontSize: '20px' }} />
                </Col>
            </Row>
        )
    }
    
}

export default connect(null, mapDispatchToProps)(MainInfo)