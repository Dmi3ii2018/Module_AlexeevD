import React from 'react';
import { List } from 'antd';

export const Chat = () => (
  <List
    itemLayout="horizontal"
    dataSource={[1, 2, 3]}
    renderItem={(item) => (
      <List.Item>
        {item}
      </List.Item>
    )}
  />
);
