import React from 'react';
import { Row, Col } from 'antd';
import { AccountOperation } from './account-operation';

export const AccountSection = () => {
    return (
        <Row>
            <AccountOperation />
            <Col span={6}>Choose account</Col> // Account list
        </Row>
    )
}
