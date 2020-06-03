import React, { useState } from 'react';
import { Button, Modal, Form, InputNumber, message } from 'antd';
import { useAccountStore } from '../hooks/account-hooks';

export const PutFundButton = ({
  ReceiverAccountNumber, userId, isLoading, isButtonDisabled,
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
        htmlType="button"
        style={{ boxShadow: '1px 1px 4px #000' }}
        onClick={() => setModal(true)}
        disabled={isButtonDisabled}
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
