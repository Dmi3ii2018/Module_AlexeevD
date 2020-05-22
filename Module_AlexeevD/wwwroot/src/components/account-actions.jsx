import React from 'react';
import { Row, Button, Popconfirm } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { PutFundButton } from './put-fund-button';
import { TransactionButton } from './transaction-button';
import { PaymentButton } from './payment-button';
import { AccountStatementButton } from './account-statement-button';
import { AccountActionCreator } from '../actions/account-actions';
import { QuestionCircleOutlined } from '@ant-design/icons';

export const AccountActions = ({ currentAccount }) => {
    const user = useSelector(({ userReducer }) => userReducer.user);
    const isLoading = useSelector(({ accountReducer }) => accountReducer.loading);
    const accountsList = useSelector(({ accountReducer }) => accountReducer.accounts);

    const dispatch = useDispatch();

    const deleteAccountButtonHandler = () => {
        dispatch(AccountActionCreator.accountDelete({ number: currentAccount.accountNumber, userId: user.id }))
    }

    return (
        <>
            <Row justify='start'>
                    <PutFundButton
                        ReceiverAccountNumber={currentAccount.accountNumber}
                        userId={user.id}
                        isLoading={user.isLoading}
                    />
                    <TransactionButton
                        senderAccountNumber={currentAccount.accountNumber}
                        userId={user.id}
                        isLoading={isLoading}
                        currentSum={currentAccount.sum}
                        accounts={accountsList}
                    />
                    <PaymentButton />
            </Row>
            <Row justify='space-between'>
                    <AccountStatementButton
                        user={user}
                        account={currentAccount}
                    />

                    <Button htmlType="button">Создать шаблон</Button>

                    <Popconfirm
                        title="Закрыть текущий счёт?"
                        icon={<QuestionCircleOutlined
                        style={{ color: 'red' }} />}
                        onConfirm={deleteAccountButtonHandler}
                    >
                        <Button htmlType='button'>Закрыть счет</Button>
                    </Popconfirm>
            </Row>
        </>
    )
}
