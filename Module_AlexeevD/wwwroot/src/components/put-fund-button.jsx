import React, { useState } from 'react'
import { AccountActionCreator } from '../actions/account-actions';
import { useDispatch } from 'react-redux';
import { Button, Modal, Form, InputNumber, message } from 'antd';

export const PutFundButton = ({ReceiverAccountNumber, userId, isLoading }) => {
    const [isModalVisible, setModal] = useState(false);

    const dispatch = useDispatch();

    const handleCancel = () => setModal(false);

    const onFinish = (value) => {
        dispatch(AccountActionCreator.accountPutFund({ sum: value.sum, ReceiverAccountNumber, userId}));
        handleCancel();
        message.success('Счет пополнен');
    };
    const onFinishFailed = (err) => console.log(err);

    return (
        <>
            <Button
                htmlType="button"
                onClick={() => setModal(true) }
            >
                Пополнить
            </Button>

            <Modal
                title="Пополнить счет"
                visible={isModalVisible}
                footer={null}
                closable={isLoading ? false : true}
                onCancel={() => handleCancel()}
            >

            <Form
                name="putFundModal"
                initialValues={0}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                >
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
                            width: '30%',
                          }}
                    />
                </Form.Item>
                <Form.Item
                    // {...tailLayout}
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