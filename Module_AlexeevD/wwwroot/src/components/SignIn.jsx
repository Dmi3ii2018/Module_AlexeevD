import React, { useEffect } from 'react';
import {
  Form, Input, Button, message,
} from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { withRouter, Redirect, Link } from 'react-router-dom';
import { UserActionCreator } from '../actions/userActions';
import { NewUserActionCreator } from '../actions/newuser-actions';

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

  const isAuthorized = useSelector(({ userReducer }) => userReducer.isAuthorized);
  const isLoading = useSelector(({ userReducer }) => userReducer.loading);
  const user = useSelector((state) => state);// TODO: remove
  const errorMessage = useSelector(({ userReducer }) => userReducer.errorMessage);
  const isNewUser = useSelector(({ newUserReducer }) => newUserReducer.isValidUser);

  console.log(isAuthorized); // TODO: remove
  console.log(user); // TODO: remove

  const dispatch = useDispatch();

  const onFinish = (values) => {
    const { login, password } = values;
    dispatch(UserActionCreator.getUserRequest({ login, password }));
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
      dispatch(UserActionCreator.setError(null));
    }

    if (isNewUser) {
      message.success('Новый пользователь успешно создан');
      dispatch(NewUserActionCreator.getNewUserError());
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
        rules={[
          {
            required: true,
            message: 'Укажите имя',
          },
          {
            type: 'email',
            message: 'Укажите логин в формате primer@primer.ru',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Укажите пароль!',
          },
          {
            min: 3,
            message: 'Пароль не должен быть менее 3-х символов',
          },
        ]}
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
