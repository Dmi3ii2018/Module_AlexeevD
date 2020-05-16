import React from 'react';
import { Layout } from 'antd';
import MainInfo from './main-info.jsx';

import 'antd/dist/antd.css';
import 'antd/es/date-picker/style/css';
import '../style.css';

export const App = () => {
    const mainStyle = {
        border: '1px solid #000000',
        margin: '40px',
        backgroundColor: '#f8faff',
    }

    return (
        <Layout style={mainStyle}>
            <MainInfo />
        </Layout >
    );
}

