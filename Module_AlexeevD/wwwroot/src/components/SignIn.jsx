﻿import React from 'react';
import { Form, Input, Button } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { UserActionCreator } from '../actions/userActions';
import { withRouter, Redirect } from 'react-router-dom';
import {compose} from "recompose";

const expml = {
    login: 'aaaaa@pri.ru',
    password: 'ssss',
}

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
    const isAuthorized = useSelector(({userReducer}) => {
        console.log(userReducer);
        return userReducer.isAuthorized;
    });
    console.log(isAuthorized);

    if(isAuthorized) {
        return <Redirect to='/' />
    }

    const dispatch = useDispatch();

    const onFinish = values => {
        console.log('Success:', values);
        dispatch(UserActionCreator.getUserRequest(expml))
    };

    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };

    return (
        <Form
            {...layout}
            name="basic"
            initialValues={{
                remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
        >
            <Form.Item
                label="Username"
                name="username"
                rules={[
                    {
                        required: true,
                        message: 'Please input your name!',
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
                        message: 'Please input your password!',
                    },
                ]}
            >
                <Input.Password />
            </Form.Item>

            <Form.Item {...tailLayout}>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    );
};

export default withRouter(SignIn);