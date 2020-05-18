import React from 'react';
import { MainInfo } from './main-info';
import { AccountSection } from './account-section';
import 'antd/dist/antd.css';
import { AccountInfo } from './account-info';

export const Main = () => {
    return (
        <>
            <MainInfo />
            <AccountSection />
            <AccountInfo />
        </>
    )
}
