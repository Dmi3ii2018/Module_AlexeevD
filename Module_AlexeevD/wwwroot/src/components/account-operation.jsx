import React from 'react';
import { Col } from 'antd';
import { CurrentAccount } from './current-account';
import { AccountActions } from './account-actions';

export const AccountOperation = () => {
    const colStyle = {
        border: '1px solid #000',
        padding: '20px 30px'
    }
    return (
            <Col
                span={18}
                style={colStyle}
            >
                <CurrentAccount />
                <AccountActions />
            </Col>
    )
}
