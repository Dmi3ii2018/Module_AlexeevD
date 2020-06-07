import React, { useState } from 'react';
import { Button, Modal, Form, InputNumber, message } from 'antd';
import { useAccountStore } from '../ducks/account/account-hooks';
import { sumRules } from '../common/validation';
import { PutFundIcon } from '../svg-icons/put-fund-icon';

export const PutFundButton = ({
  ReceiverAccountNumber, userId, isLoading, isButtonDisabled, buttonStyle
}) => {
  const [isModalVisible, setModal] = useState(false);

  const { putFund } = useAccountStore();

  const handleCancel = () => setModal(false);

  const onFinish = (value) => {
    putFund({ sum: value.sum, ReceiverAccountNumber, userId });
    handleCancel();
    message.success('Счет пополнен');
  };
  const onFinishFailed = (err) => console.log(err);

  return (
    <>
      <Button
        block="true"
        htmlType="button"
        style={buttonStyle}
        onClick={() => setModal(true)}
        disabled={isButtonDisabled}
        icon={<PutFundIcon />}
      >
        Пополнить
      </Button>
      <Modal
        title="Пополнить счет"
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
          <Form.Item
            label="Сумма"
            name="sum"
            rules={sumRules}
          >
            <InputNumber
              min={0}
              precision={2}
              style={{
                width: '30%',
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
