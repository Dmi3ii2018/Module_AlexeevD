import React from 'react';
import { Col, Button, Form, Input } from 'antd';
import { MessageOutlined } from '@ant-design/icons';
import { Chat } from './chat';
import { sendMessage } from '../common/Soket';


export const Feedback = () => {
  const buttonStyle = {
    boxSizing: 'border-box',
    borderRadius: '10px',
    height: "40px",
    width: '100%',
  }

  const onFinish = (value) => {
    console.log(value);
    sendMessage(value.message);
  };

  return (
    (
      <Col span={6} style={{display: "flex", justifyContent: "flex-end", padding: "20px 0" }}>
        <div className="feedback">
          <div>
            <Chat />
          </div>

          <Form
            name="sendMessageModal"
            onFinish={onFinish}
          >
            <Form.Item
              name="message"
            >
              <Input />
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                style={buttonStyle}
              >
                Отправить
            </Button>
            </Form.Item>
          </Form>

        </div>
      </Col>
    )
  )
};


