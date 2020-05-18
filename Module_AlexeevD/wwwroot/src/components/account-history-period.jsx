import React from 'react';
import { Col, Row, DatePicker, Descriptions } from 'antd';
import moment from 'moment';

const { RangePicker } = DatePicker;

export const AccountHistoryPeriod = () => {
    const  disabledDate = (current) => {
        return current && current > moment().endOf('day');
      }

      const accountHistoryStyle = {
          width: '60%'
      }
    return (
            <Row justify='space-between'>
                <span>История операций по счету</span>
                <Descriptions style={accountHistoryStyle}>
                    <Descriptions.Item label="Период ">
                        <RangePicker format='MM/DD/YYYY' disabledDate={disabledDate} />
                    </Descriptions.Item>
                </Descriptions>
            </Row>
    )
}