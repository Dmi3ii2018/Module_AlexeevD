import React, { useState } from 'react'
import { AccountActionCreator } from '../actions/account-actions';
import { useDispatch } from 'react-redux';
import { Button, Modal, Form, InputNumber, message, Switch, Select } from 'antd';

const { Option } = Select;

export const TransactionButton = ({senderAccountNumber, userId, isLoading, currentSum, accounts}) => {
    const [isModalVisible, setModal] = useState(false);
    const [isInnerTransaction, setSwitch] = useState(false);

    const dispatch = useDispatch();

    const handleCancel = () => setModal(false);

    const onFinish = (values) => {
        console.log(values);
        const { sum, accountNumber } = values;
        const receiverAccountNumber = accountNumber.value ? accountNumber.value : accountNumber;
        console.log(sum, receiverAccountNumber, userId);

        if(currentSum < values.sum) {
            return message.warning('Недостаточно средств для перевода');
        }
       dispatch(AccountActionCreator.accountMakeTransaction({ sum, receiverAccountNumber, senderAccountNumber, userId}));
        handleCancel();
        message.success('Перевод выполнен');
    };
    const onFinishFailed = (err) => console.log(err);

    const switchHandler = () => setSwitch(!isInnerTransaction);

    return (
        <>
            <Button
                htmlType="button"
                onClick={() => setModal(true) }
            >
                Перевод
            </Button>

            <Modal
                title="Сделать перевод"
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

            {<p style={{color: 'rgba(0, 0, 0, 0.85)'}}>
                Перевод между своими счетами:
                <Switch style={{margin: '0 24px'}} onChange={switchHandler} />
            </p>}

            { isInnerTransaction ?
                <Form.Item
                label="Счет зачисления"
                name="accountNumber"
                rules={[
                    {
                        required: true,
                        message: 'Выберите номер зачисления'
                    },
                ]}
                >
                    <Select
                        style={{ width: '50%' }}
                        value={0}
                    >
                        {accounts.map(({accountNumber, sum, accountId}) => {
                            return <Option key={accountId} value={accountNumber}>{`${accountNumber} (${sum})`}</Option>
                        })}
                    </Select>
                </Form.Item>
                :
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
            }

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