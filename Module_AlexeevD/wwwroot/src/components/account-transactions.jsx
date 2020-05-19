import React from 'react';
import { Col, List } from 'antd';
import { AccountHistoryPeriod } from './account-history-period';
import { AccountHistory } from './account-history';

export const AccountTransactions = () => {
    return (
        <Col span={18}>
            <AccountHistoryPeriod />
            <AccountHistory />
        </Col>
    )
}