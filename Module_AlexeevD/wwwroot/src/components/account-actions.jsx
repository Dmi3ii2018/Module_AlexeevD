import React from 'react';
import { Row, Button, Popconfirm } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { QuestionCircleOutlined } from '@ant-design/icons';
import { PutFundButton } from './put-fund-button';
import { TransactionButton } from './transaction-button';
import { PaymentButton } from './payment-button';
import { AccountStatementButton } from './account-statement-button';
import { AccountActionCreator } from '../actions/account-actions';

export const AccountActions = ({ currentAccount }) => {
  const user = useSelector(({ userReducer }) => userReducer.user);
  const isLoading = useSelector(({ accountReducer }) => accountReducer.loading);
  const accountsList = useSelector(({ accountReducer }) => accountReducer.accounts);

  const dispatch = useDispatch();

  const deleteAccountButtonHandler = () => {
    dispatch(AccountActionCreator.accountDelete({ number: currentAccount.accountNumber, userId: user.id }));
  };

  return (
    <>
      <Row justify="start" style={{ padding: '20px' }}>
        <PutFundButton
          ReceiverAccountNumber={currentAccount.accountNumber}
          userId={user.id}
          isLoading={user.isLoading}
          isButtonDisabled={!currentAccount}
        />
        <TransactionButton
          senderAccountNumber={currentAccount.accountNumber}
          userId={user.id}
          isLoading={isLoading}
          currentSum={currentAccount.sum}
          disabled={!accountsList.length}
          accounts={accountsList}
          isButtonDisabled={!currentAccount}
        />

        <PaymentButton isButtonDisabled={!currentAccount} />
      </Row>
      <Row justify="space-between" style={{ padding: '20px' }}>

        <AccountStatementButton
          user={user}
          account={currentAccount}
          isButtonDisabled={!currentAccount}
        />

        <Button htmlType="button" style={{ margin: '0 20px', boxShadow: '1px 1px 4px #000' }}>Создать шаблон</Button>

        <Popconfirm
          title="Закрыть текущий счёт?"
          icon={(
            <QuestionCircleOutlined
              style={{ color: 'red' }}
            />
)}
          onConfirm={deleteAccountButtonHandler}
          disabled={!currentAccount}
        >
          <Button style={{ boxShadow: '1px 1px 4px #000' }} disabled={!currentAccount} htmlType="button">Закрыть счет</Button>
        </Popconfirm>
      </Row>
    </>
  );
};
