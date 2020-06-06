import React, { useState, useEffect } from 'react';
import { Button, Modal, Form, InputNumber, Input, message } from 'antd';
import { accountRules, emailRules, createRule } from '../common/validation';
import { useTemplateStore } from '../ducks/payment-template/template-hooks'
import { useUserStore } from '../ducks/user/user-hooks';

export const TemplateButton = ({ isButtonDisabled }) => {
  const [isModalVisible, setModal] = useState(false);
  const { isLoading, successMessage, templates, createTemplate } = useTemplateStore();
  const { user } = useUserStore();

  const handleCancel = () => setModal(false);

  const onFinish = (values) => {
    const { account, paymentName, receiverName, receiverEmail, purpose } = values;
    const isExistingTemplate = templates.some(it => it.paymentName.trim() === paymentName)

    if(isExistingTemplate) {
      message.warn("Шаблон с таким именем уже существует");
      return;
    }

    createTemplate( {userId: user.id, account, paymentName, receiverName, receiverEmail, purpose } );
    handleCancel();
  };
  const onFinishFailed = (err) => console.log(err);

  useEffect(() => {
    if (successMessage) {
      message.success(successMessage);
    }
  });

  return (
    <>
      <Button
        htmlType="button"
        disabled={isButtonDisabled}
        style={{ boxShadow: '1px 1px 4px #000' }}
        onClick={() => setModal(true)}
      >
        Создать шаблон
      </Button>

      <Modal
        title="Создать новый шаблон"
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
            name="account"
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

          <Form.Item
            label="Название платежа"
            name="paymentName"
            rules={createRule('Укажите название платежа')}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="На кого платёж"
            name="receiverName"
            rules={createRule('Укажите кому предназначается платёж')}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="e-mail получателя"
            name="receiverEmail"
            rules={emailRules}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Назначение платежа"
            name="purpose"
            rules={createRule('Укажите назначение платежа')}
          >
            <Input />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              loading={isLoading}
              disabled={isLoading}
            >
              Создать шаблон
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};
