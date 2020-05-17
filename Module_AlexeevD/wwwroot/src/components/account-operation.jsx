import React from 'react';
import { Col } from 'antd';
import { CurrentAccount } from './current-account';
import { AccountActions } from './account-actions';

export const AccountOperation = () => {
    return (
            <Col span={18}>
                <CurrentAccount />
                <AccountActions />
            </Col>
    )
}
