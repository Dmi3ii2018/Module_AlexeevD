import React, { useState } from 'react'
import { AccountActionCreator } from '../actions/account-actions';
import { useDispatch } from 'react-redux';
import { Button, Modal, Form, InputNumber, message, Switch, Select } from 'antd';

const { Option } = Select;

export const PaymentButton = ({senderAccountNumber, userId, isLoading, currentSum, accounts}) => {
    const [isModalVisible, setModal] = useState(false);

    const dispatch = useDispatch();

    const handleCancel = () => setModal(false);

    const onFinish = (values) => {
        handleCancel();
    };
    const onFinishFailed = (err) => console.log(err);


    return (
        <>
            <Button
                htmlType="button"
                onClick={() => setModal(true) }
            >
                Платёж
            </Button>

            <Modal
                title="Реквизиты платежа"
                visible={isModalVisible}
                footer={null}
                closable={isLoading ? false : true}
                onCancel={() => handleCancel()}
            >

            <Form
                name="paymentModal"
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                >

            <Form.Item
                label="Счет зачисления"
                name="accountNumber"
                rules={[
                {
                    required: true,
                    message: 'Укажите номер зачисления'
                },
                {
                    type: 'number',
                    message: 'Номер не соответствуе формату',
                },
                () => ({
                    validator(_, value) {
                        if (value < 4000000000 || value > 4999999999) {
                        return Promise.reject('Проверьте введенный номер');
                        }
                        return Promise.resolve();
                    },
                    }),
                ]}
            >
                <InputNumber
                    min={4000000000}
                    max={4999999999}
                    precision={0}
                    initialValue={0}
                    style={{
                        width: '50%',
                        }}
                />
                </Form.Item>

                <Form.Item
                    label="Сумма"
                    name="sum"
                    rules={[
                    {
                        required: true,
                        message: 'Укажите сумму'
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
                            width: '40%',
                          }}
                    />
                </Form.Item>
                <Form.Item
                >
                    <Button
                        type="primary"
                        htmlType="submit"
                        loading={isLoading}
                        disabled={isLoading}
                    >
                        Submit
                    </Button>
                </Form.Item>
                </Form>
            </Modal>
        </>
    )
}