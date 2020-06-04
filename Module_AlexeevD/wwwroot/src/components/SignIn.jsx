import React, { useEffect } from 'react';
import { Form, Input, Button, message } from 'antd';
import { useUserStore } from '../ducks/user/user-hooks';
import { withRouter, Redirect, Link } from 'react-router-dom';
import { loginRules, passwordRules } from '../common/validation'

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

const SignIn = () => {
  const formRef = React.createRef();

  const {
    isAuthorized,
    isLoading,
    errorMessage,
    isNewUser,
    getUserRequest,
    resetUserError,
    getNewUserError } = useUserStore();

  const onFinish = (values) => {
    const { login, password } = values;
    getUserRequest({ login, password });
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
      resetUserError();
    }

    if (isNewUser) {
      message.success('Новый пользователь успешно создан');
      getNewUserError();
    }
  });

  if (isAuthorized) {
    return <Redirect to="/" />;
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
        label="Username"
        name="login"
        rules={loginRules}
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

      <Form.Item {...tailLayout}>
        <Button
          type="primary"
          htmlType="submit"
          loading={isLoading}
          disabled={isLoading}
        >
          Submit
        </Button>
        <Button
          htmlType="button"
          onClick={onReset}
          disabled={isLoading}
          style={{
            margin: '0 10px',
          }}
        >
          Reset
        </Button>
        <Link to="/Auth/SignUp">
          Sign up
        </Link>
      </Form.Item>
    </Form>
  );
};

export default withRouter(SignIn);
