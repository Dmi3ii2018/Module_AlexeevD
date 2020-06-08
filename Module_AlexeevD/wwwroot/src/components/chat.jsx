import React from 'react';
import { List, Collapse } from 'antd';

const { Panel } = Collapse;

export const Chat = ({ messages }) => (
  <List
    itemLayout="horizontal"
    dataSource={messages}
    renderItem={(item) => (
      <List.Item>
        {item.payload
          ? <Collapse>
            <Panel header={item.message} key="1">
              <p>{item.payload}</p>
            </Panel>
          </Collapse>
          : item.message
          }

      </List.Item>
    )}
  />
);
