import React from 'react';
import { Col, Button, Form, Input, Collapse } from 'antd';
import { Chat } from './chat';
import { sendMessage } from '../common/Soket';
import { useFeedbackStore } from '../ducks/feedback/feedback-hooks';
import { createMessage } from '../utils/createMessage';
import { MessageStatus, RESPONSE_MESSAGE } from '../utils/consts';
import { socket } from '../common/Soket';

const { Panel } = Collapse;

export const Feedback = () => {
  const buttonStyle = {
    boxSizing: 'border-box',
    borderRadius: '10px',
    height: "40px",
    width: '100%',
  }

  const { messages, setMessage } = useFeedbackStore();

  const onFinish = (value) => {
    console.log(value);

    const message = createMessage(value.message, null, MessageStatus.SEND);
    setMessage(message);

    sendMessage(value.message);
  };

  socket.onmessage = function (value) {
    console.log(value);
    console.log(value.data);

    const message = createMessage(RESPONSE_MESSAGE, value.data, MessageStatus.RECEIVE);
    console.log(message);
    setMessage(message);
  }

  return (
    (
      <Col span={6} style={{display: "flex", justifyContent: "flex-end", padding: "20px 0" }}>
        <div className="feedback">

          <div style={{ overflowY: "scroll", marginBottom: '5px' }}>
            <Chat messages={messages} />
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


