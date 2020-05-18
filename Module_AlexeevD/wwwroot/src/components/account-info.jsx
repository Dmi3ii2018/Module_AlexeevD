import React from 'react';
import { Row, Col } from 'antd';
import { AccountTransactions } from './account-transactions';

export const AccountInfo = () => {
    return (
        <Row>
            <AccountTransactions />
            <Col>Chat</Col>
        </Row>
    )
}