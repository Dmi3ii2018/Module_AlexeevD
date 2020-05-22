import React from 'react';
import { Col, Button } from 'antd';
import { MessageOutlined }from '@ant-design/icons';
import { Chat } from './chat';


export const Feedback = () => {
    return (
        <Col span={6}>
            <div>
                <span>Написать в чат</span>
                <Chat />
            </div>
            <Button>Написать в чат</Button>
            <MessageOutlined />
        </Col>
    )
}
