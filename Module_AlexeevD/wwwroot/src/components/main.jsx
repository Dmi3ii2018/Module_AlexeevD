import React from 'react';
import MainInfo from './main-info';
import { AccountSection } from './account-section';
import 'antd/dist/antd.css';
import { AccountInfo } from './account-info';
import { useSelector } from 'react-redux';


export const Main = () => {
    const state = useSelector(state => state);
    console.log(state);

    return (
        <>
            <MainInfo />
            <AccountSection />
            <AccountInfo />
        </>
    )
}
