import React from 'react';
import { Layout } from 'antd';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import MainInfo from './main-info.jsx';
import SignIn from './SignIn.jsx';
import SignUp from './SignUp.jsx';

import 'antd/dist/antd.css';

export const App = () => {
    const mainStyle = {
        border: '1px solid #000000',
        margin: '40px',
        backgroundColor: '#f8faff',
    }

    return (
        <BrowserRouter>
            <Layout style={mainStyle}>
                <Switch>
                    <Route path='/' exact component={MainInfo} />
                    <Route path='/Auth/SignIn' component={SignIn} />
                    <Route path='/Auth/SignUp' component={SignUp} />
                </ Switch>
            </Layout >
        </ BrowserRouter>
    );
}

