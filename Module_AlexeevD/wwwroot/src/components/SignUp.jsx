import React, { useEffect } from 'react';
import { Form, Input, Button, message } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { NewUserActionCreator } from '../actions/newuser-actions';
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

    const errorMessage = useSelector(({userReducer}) => {
        return userReducer.errorMessage;
    });
    const isLoading = useSelector(({newUserReducer}) => {
        return newUserReducer.loading;
    });

    const dispatch = useDispatch();

    const onFinish = values => {
        console.log(values);
        const {login, firstname, password, confirm} = values;
        dispatch(NewUserActionCreator.getNewUserRequest({ login, firstname, password, confirm }));
        //return <Redirect to="/Auth/SignIn" />;
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
                label="First Name"
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
                label="Confirm Password"
                name="confirm"
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
                <Link to={'/Auth/SignIn'}>
                    Sign in
                </ Link>
            </Form.Item>
        </Form>
    );
};

export default withRouter(SignUp);