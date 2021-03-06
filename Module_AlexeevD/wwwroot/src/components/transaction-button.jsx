import React, { useState } from 'react';
import { useAccountStore } from '../ducks/account/account-hooks';
import {
  Button, Modal, Form, InputNumber, message, Switch, Select,
} from 'antd';
import { accountRules, sumRules, selectRules } from '../common/validation';
import { TransactionIcon } from '../svg-icons/transaction-icon';

const { Option } = Select;

export const TransactionButton = ({
  senderAccountNumber, userId, isLoading, currentSum, accounts, isButtonDisabled, buttonStyle
}) => {
  const [isModalVisible, setModal] = useState(false);
  const [isInnerTransaction, setSwitch] = useState(false);

  const { makeTransaction } = useAccountStore();

  const handleCancel = () => setModal(false);

  const onFinish = (values) => {
    const { sum, accountNumber } = values;
    const receiverAccountNumber = accountNumber.value ? accountNumber.value : accountNumber;

    if (currentSum < values.sum) {
      return message.warning('Недостаточно средств для перевода');
    }
    makeTransaction({
      sum, receiverAccountNumber, senderAccountNumber, userId,
    });
    handleCancel();
    message.success('Перевод выполнен');
  };
  const onFinishFailed = (err) => console.log(err);

  const switchHandler = () => setSwitch(!isInnerTransaction);

  return (
    <>
      <Button
        htmlType="button"
        onClick={() => setModal(true)}
        disabled={isButtonDisabled}
        style={buttonStyle}
        icon={<TransactionIcon />}
      >
        Перевод
      </Button>

      <Modal
        title="Сделать перевод"
        visible={isModalVisible}
        footer={null}
        closable={!isLoading}
        onCancel={() => handleCancel()}
      >

        <Form
          name="putFundModal"
          initialValues={0}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >

          <p style={{ color: 'rgba(0, 0, 0, 0.85)' }}>
            Перевод между своими счетами:
            <Switch style={{ margin: '0 24px' }} onChange={switchHandler} />
          </p>

          { isInnerTransaction
            ? (
              <Form.Item
                label="Счет зачисления"
                name="accountNumber"
                rules={selectRules}
              >
                <Select
                  style={{ width: '50%' }}
                  value={0}
                >
                  {accounts.map(({ accountNumber, sum, accountId }) => <Option key={accountId} value={accountNumber}>{`${accountNumber} (${sum})`}</Option>)}
                </Select>
              </Form.Item>
            )
            : (
              <Form.Item
                label="Счет зачисления"
                name="accountNumber"
                rules={accountRules}
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
            )}

          <Form.Item
            label="Сумма"
            name="sum"
            rules={sumRules}
          >
            <InputNumber
              min={0}
              precision={2}
              style={{
                width: '40%',
              }}
            />
          </Form.Item>
          <Form.Item>
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
  );
};
