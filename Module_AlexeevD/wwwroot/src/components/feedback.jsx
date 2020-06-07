import React from 'react';
import { Col, Button } from 'antd';
import { MessageOutlined } from '@ant-design/icons';
import { Chat } from './chat';


export const Feedback = () => {
  const buttonStyle = {
    background: '#FFFFFF',
    boxSizing: 'border-box',
    borderRadius: '10px',
    height: "40px",
    width: '100%',
  }
  return (
    (
      <Col span={6} style={{display: "flex", justifyContent: "flex-end", padding: "20px 0" }}>
        <div className="feedback">
          <div>
            <Chat />
          </div>
          <Button
            style={buttonStyle}
          >Написать в чат...</Button>
        </div>
      </Col>
    )
  )
};
