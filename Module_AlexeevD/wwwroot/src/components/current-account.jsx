import React from 'react';
import { Row, Col, Statistic, Descriptions } from 'antd';

export const CurrentAccount = () => {
    return (
        <Row>
            <Col span={16}>
                <Statistic>123456789</ Statistic>
            </Col>
            <Col span={18}>
                <Descriptions>
                    <Descriptions.Item label="Баланс">54321</Descriptions.Item>
                </Descriptions>
            </Col>
        </Row>
    )
}
