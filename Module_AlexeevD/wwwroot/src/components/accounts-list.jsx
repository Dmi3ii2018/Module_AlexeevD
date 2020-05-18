import React from 'react';
import { Row, Col, Select, Button } from 'antd';

const { Option } = Select;

export const AccountsList = () => {
    return (
        <Col span={6}>
            <Row justify='center'>
                <Select defaultValue='lucy' style={{ width: '90%' }} onChange={() => console.log('Cb here')}>
                    <Option value='jack'>Jack</Option>
                    <Option value='lucy'>Lucy</Option>
                    <Option value='disabled' disabled>
                        Disabled
                    </Option>
                    <Option value='Yiminghe'>yiminghe</Option>
                </Select>
                <Button htmlType='button' style={{ width: '90%' }}>Открыть новый счет</Button>
            </Row>
        </Col>
    )
}