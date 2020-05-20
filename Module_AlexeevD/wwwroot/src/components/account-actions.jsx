import React from 'react';
import { Row, Button } from 'antd';
import { useSelector } from 'react-redux';
import { PutFundButton } from './put-fund-button';
import { TransactionButton } from './transaction-button';


export const AccountActions = ({ currentAccount }) => {
    const userId = useSelector(({ userReducer }) => userReducer.id);
    const isLoading = useSelector(({ accountReducer }) => accountReducer.loading);
    const accountsList = useSelector(({ accountReducer }) => accountReducer.accounts);

    return (
        <>
            <Row justify='start'>
                    <PutFundButton
                        ReceiverAccountNumber={currentAccount.accountNumber}
                        userId={userId}
                        isLoading={isLoading}
                    />
                    <TransactionButton
                        senderAccountNumber={currentAccount.accountNumber}
                        userId={userId}
                        isLoading={isLoading}
                        currentSum={currentAccount.sum}
                        accounts={accountsList}
                    />

                    <Button htmlType="button">Платеж</Button>
            </Row>
            <Row justify='space-between'>
                    <Button htmlType="button">Выписка</Button>
                    <Button htmlType="button">Создать шаблон</Button>
                    <Button htmlType="button">Закрыть счет</Button>
            </Row>
        </>
    )
}
