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
                        isButtonDisabled={currentAccount ? false : true}
                    />
                    <TransactionButton
                        senderAccountNumber={currentAccount.accountNumber}
                        userId={user.id}
                        isLoading={isLoading}
                        currentSum={currentAccount.sum}
                        disabled={accountsList.length ? false : true}
                        accounts={accountsList}
                        isButtonDisabled={currentAccount ? false : true}
                    />
                    <PaymentButton isButtonDisabled={currentAccount ? false : true} />
            </Row>
            <Row justify='space-between'>

                    <AccountStatementButton
                        user={user}
                        account={currentAccount}
                        isButtonDisabled={currentAccount ? false : true}
                    />

                    <Button htmlType="button">Создать шаблон</Button>

                    <Popconfirm
                        title="Закрыть текущий счёт?"
                        icon={<QuestionCircleOutlined
                        style={{ color: 'red' }} />}
                        onConfirm={deleteAccountButtonHandler}
                        disabled={currentAccount ? false : true}
                    >
                        <Button disabled={currentAccount ? false : true} htmlType='button'>Закрыть счет</Button>
                    </Popconfirm>
            </Row>
        </>
    )
}
