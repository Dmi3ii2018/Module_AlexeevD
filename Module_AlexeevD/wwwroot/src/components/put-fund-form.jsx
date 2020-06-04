import React from 'react'
import { PutFundInput } from './put-fund-input'
import { Button, Form } from 'antd';
import { Field, reduxForm } from 'redux-form';

const PutFundForm = (props) => {
    const { onSubmit, isLoading } = props;
    return (
        <Form
          name="putFundModal"
          initialValues={0}
          onFinish={onSubmit}
        >
          <Field
            label="Сумма"
            name="sum"
            component={PutFundInput}
          />

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
    )
}

export default reduxForm({
    form: "PutFundForm"
})(PutFundForm)