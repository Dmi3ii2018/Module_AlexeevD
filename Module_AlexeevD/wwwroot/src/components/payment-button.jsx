import React, { useState } from 'react';
import { Button, Modal, Form, InputNumber, Input, Select, Switch } from 'antd';
import { accountRules, sumRules, emailRules, createRule } from '../common/validation';
import { useTemplateStore } from '../ducks/payment-template/template-hooks';
import { setTemplateValues } from '../common/template-values';
import { PaymentIcon } from '../svg-icons/payment-icon';
import uid from 'uid';

export const PaymentButton = ({ buttonStyle, isButtonDisabled }) => {
  const [ isModalVisible, setModal ] = useState(false);
  const [ isTemplateAvaliable, setTemplate ] = useState(false);
  const [form] = Form.useForm();

  const formRef = React.createRef();

  const { templates, chosenTemplate, chooseAnotherTemplate } = useTemplateStore();
  const myStateRef = React.useRef(chosenTemplate);

  const handleCancel = () => setModal(false);

  const onFinish = () => {
    handleCancel();
  };
  const onFinishFailed = (err) => console.log(err);

  const onReset = () => {
    formRef.current.resetFields();
  };

  const switchHandler = () => setTemplate(!isTemplateAvaliable);

  const chooseTemplate = (val) => {
    const temp = templates.find(it => it.paymentName === val);
    chooseAnotherTemplate(temp);
    myStateRef.current = temp;
  }

  return (
    <>
      <Button
        htmlType="button"
        disabled={isButtonDisabled}
        style={ buttonStyle }
        onClick={() => setModal(true)}
        icon={<PaymentIcon />}
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
          ref={formRef}
          form={form}
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
            style={{ width: '50%', margin: '20px 0' }}
            disabled={!isTemplateAvaliable}
            onSelect={(val) => {
              chooseTemplate(val);
              form.setFieldsValue(setTemplateValues(myStateRef.current));
            }}
          >
            {
              templates.map(template => {
              return <Select.Option key={uid()} value={ template.paymentName }>{ template.paymentName }</ Select.Option>
              })
            }
          </Select>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
            >
              Submit
            </Button>
            <Button
              htmlType="button"
              onClick={onReset}
              style={{
                margin: '0 10px',
              }}
            >
              Reset
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};
