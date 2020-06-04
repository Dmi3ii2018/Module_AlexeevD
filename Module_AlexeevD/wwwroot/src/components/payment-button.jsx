import React, { useState } from 'react';
import { Button, Modal, Form, InputNumber, Input, Select, Switch } from 'antd';
import { accountRules, sumRules, emailRules, createRule } from '../common/validation';

export const PaymentButton = ({ isButtonDisabled }) => {
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
        disabled={isButtonDisabled}
        style={{ boxShadow: '1px 1px 4px #000' }}
        onClick={() => setModal(true)}
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
            name="purposeOfPayment"
            rules={createRule('Укажите назначение платежа')}
          >
            <Input />
          </Form.Item>

          <p style={{ color: 'rgba(0, 0, 0, 0.85)' }}>
            Иcпользовать шаблон
            <Switch style={{ margin: '0 24px' }} onChange={switchHandler} />
          </p>

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
  );
};
