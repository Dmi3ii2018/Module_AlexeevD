import React, { useEffect } from 'react';
import { Form, Input, Button, message } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { UserActionCreator } from '../actions/userActions';
import { withRouter, Redirect, Link } from 'react-router-dom';

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

    const isAuthorized = useSelector(({userReducer}) => {
        return userReducer.isAuthorized;
    });
    const errorMessage = useSelector(({userReducer}) => {
        return userReducer.errorMessage;
    });
    console.log(isAuthorized); //TODO: remove

    const dispatch = useDispatch();

    const onFinish = values => {
        // const {login, password} = values;
        // dispatch(UserActionCreator.getUserRequest({login, password}))
    };

    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };

    const onReset = () => {
        formRef.current.resetFields();
      };

    useEffect(() => {
        if(errorMessage) {
            message.error(errorMessage);
            dispatch(UserActionCreator.setError(null));
        }
      });

    return (
        <Form
            {...layout}
            name="basic"
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
                rules={[
                    {
                        required: true,
                        message: 'Укажите email адррес',
                    },
                    {
                        type: 'email',
                        message: 'Укажите email в формате primer@primer.ru'
                    }
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Firstname"
                name="firstname"
                rules={[
                    {
                        required: true,
                        message: 'Укажите имя',
                    },
                    {
                        min: 3,
                        message: 'Имя не должен быть менее 3-х символов'
                    }
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
                        message: 'Пароль не должен быть менее 3-х символов'
                    }
                ]}
            >
                <Input.Password />
            </Form.Item>

            <Form.Item
                name="confirm"
                label="Confirm Password"
                dependencies={['password']}
                hasFeedback
                rules={[
                {
                    required: true,
                    message: 'Подтвердите ваш пароль',
                },
                ({ getFieldValue }) => ({
                    validator(rule, value) {
                    if (!value || getFieldValue('password') === value) {
                        return Promise.resolve();
                    }
                    return Promise.reject('Введенные вами пароли не совпадают');
                    },
                }),
                ]}
            >
                <Input.Password />
            </Form.Item>

            <Form.Item {...tailLayout}>
                <Button type="primary" htmlType="submit">
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
                <Link to={'/Auth/SignIn'}>
                    Sign in
                </ Link>
            </Form.Item>
        </Form>
    );
};

export default withRouter(SignUp);