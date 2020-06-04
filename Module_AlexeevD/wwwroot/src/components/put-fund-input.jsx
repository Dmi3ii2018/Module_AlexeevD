import React from 'react'
import { Form, InputNumber } from 'antd';


export const PutFundInput = ({
    label,
    input,
    ...custom
  }) => {
    return (
        <Form.Item
            label={label}
            {...input}
            {...custom}
            rules={[
              {
                required: true,
                message: 'Укажите сумму',
              },
              {
                type: 'number',
                message: 'Укажите число',
              },
              () => ({
                validator(_, value) {
                  if (value > 0) {
                    return Promise.resolve();
                  }
                  return Promise.reject('Сумма не может быть отрицательной');
                },
              }),
            ]}
          >
            <InputNumber
              min={0}
              precision={2}
              style={{
                width: '30%',
              }}
            />
          </Form.Item>
    )
}