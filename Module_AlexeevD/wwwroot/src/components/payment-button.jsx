import React, { useState } from 'react'
import { Button, Modal, Form, InputNumber, Input, Select, Switch } from 'antd';

export const PaymentButton = () => {
    const [isModalVisible, setModal] = useState(false);
    const [isTemplateAvaliable, setTemplate] = useState(false);

    const handleCancel = () => setModal(false);

    const onFinish = () => {
        handleCancel();
    };
    const onFinishFailed = (err) => console.log(err);

    const switchHandler = () => setTemplate(!isTemplateAvaliable);

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
                onCancel={() => handleCancel()}
            >

            <Form
                name="paymentModal"
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                >

            <Form.Item
                label="Номер счета"
                name="accountNumber"
                rules={[
                {
                    required: true,
                    message: 'Укажите номер счета'
                },
                {
                    type: 'number',
                    message: 'Номер счета не соответствуе формату',
                },
                () => ({
                    validator(_, value) {
                        if (value < 4000000000 || value > 4999999999) {
                        return Promise.reject('Проверьте введенный номер счсета');
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
                    label="Название платежа"
                    name="paymentName"
                    rules={[
                        {
                            required: true,
                            message: 'Укажите назначение платежа'
                        }
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="На кого платёж"
                    name="receiverName"
                    rules={[
                        {
                            required: true,
                            message: 'Укажите кому предназначается платёж'
                        }
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="e-mail получателя"
                    name="receiverEmail"
                    rules={[
                        {
                            required: true,
                            message: 'Укажите email адрес получателя'
                        },
                        {
                            type: 'email',
                            message: 'Не верный email адрес'
                        }
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Назначение платежа"
                    name="purposeOfPayment"
                    rules={[
                        {
                            required: true,
                            message: 'Укажите назначение платежа'
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                {<p style={{color: 'rgba(0, 0, 0, 0.85)'}}>
                    Иcпользовать шаблон
                    <Switch style={{margin: '0 24px'}} onChange={switchHandler} />
                </p>}

                <Select
                    style={{ width: '50%' }}
                    value={0}
                    disabled={!isTemplateAvaliable}
                >
                    {/* {accounts.map(({accountNumber, sum, accountId}) => {
                        return <Option key={accountId} value={accountNumber}>{`${accountNumber} (${sum})`}</Option>
                    })} */}
                </Select>

                <Form.Item>
                    <Button
                        type="primary"
                        htmlType="submit"
                    >
                        Submit
                    </Button>
                </Form.Item>
                </Form>
            </Modal>
        </>
    )
}