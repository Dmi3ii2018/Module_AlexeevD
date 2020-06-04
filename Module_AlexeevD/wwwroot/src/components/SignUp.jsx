import React, { useEffect } from 'react';
import {
  Form, Input, Button, message,
} from 'antd';
import { useUserStore } from '../ducks/user/user-hooks';
import { withRouter, Redirect, Link } from 'react-router-dom';
import { emailRules, nameRules, passwordRules, confirmPasswordRules } from '../common/validation';

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

const SignUp = () => {
  const formRef = React.createRef();

  const {
    errorMessage,
    isNewUserLoading,
    isNewUser,
    getNewUserRequest,
    getNewUserError,
    resetUserError } = useUserStore();

  const onFinish = (values) => {
    const {
      login, firstname, password, confirm,
    } = values;
    resetUserError();

    getNewUserRequest({
      login, firstname, password, confirm,
    });
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const onReset = () => {
    formRef.current.resetFields();
  };

  useEffect(() => {
    if (errorMessage) {
      message.error(errorMessage);
      getNewUserError();
      resetUserError();
    }
  });

  if (isNewUser) {
    resetUserError();
    return <Redirect to="/Auth/SignIn" />;
  }

  const formStyle = {
    width: '35%',
    alignSelf: 'center',
    justifyContent: 'center',
    margin: '100px 0',
    border: '1px solid #000',
    alignItems: 'center',
    padding: '20px',
    boxShadow: '1px 1px 7px #000',
    background: 'linear-gradient(90deg, #cfecd0, #a0cea7, #9ec0db)',
  };

  return (
    <Form
      {...layout}
      name="basic"
      style={formStyle}
      ref={formRef}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="Email Address"
        name="login"
        rules={emailRules}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="First Name"
        name="firstname"
        rules={nameRules}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={passwordRules}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        label="Confirm Password"
        name="confirm"
        dependencies={['password']}
        hasFeedback
        rules={confirmPasswordRules}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button
          type="primary"
          htmlType="submit"
          loading={isNewUserLoading}
          disabled={isNewUserLoading}
        >
          Submit
        </Button>
        <Button
          htmlType="button"
          onClick={onReset}
          disabled={isNewUserLoading}
          style={{
            margin: '0 10px',
          }}
        >
          Reset
        </Button>
        <Link to="/Auth/SignIn">
          Sign in
        </Link>
      </Form.Item>
    </Form>
  );
};

export default withRouter(SignUp);
