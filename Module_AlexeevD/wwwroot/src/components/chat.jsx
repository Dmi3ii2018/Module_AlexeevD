import React from 'react';
import { List } from 'antd';

export const Chat = () => {
    return (
            <List
                itemLayout="horizontal"
                dataSource={[1, 2, 3]}
                renderItem={item => (
                <List.Item>
                    {/* <List.Item.Meta
                    // avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                    // title={<a href="https://ant.design">{item.title}</a>}
                    description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                    /> */}
                    {item}
                </List.Item>
                )}
            />
    )
}
