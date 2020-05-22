import React, { useEffect } from 'react';
import { Col } from 'antd';
import { AccountHistoryData } from './account-history-data';

export const AccountTransactions = () => {
    return (
        <Col span={18}>
            <AccountHistoryData />
        </Col>
    )
}