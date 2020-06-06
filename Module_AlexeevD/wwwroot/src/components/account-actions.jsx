import React from 'react';
import { useUserStore } from '../ducks/user/user-hooks';
import { useAccountStore } from '../ducks/account/account-hooks';
import { Row, Button, Popconfirm } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';
import { PutFundButton } from './put-fund-button';
import { TransactionButton } from './transaction-button';
import { PaymentButton } from './payment-button';
import { AccountStatementButton } from './account-statement-button';
import { TemplateButton } from './template-button';

export const AccountActions = ({ currentAccount }) => {
  const { user } = useUserStore();
  const { isLoading, accountsList, deleteAccountButtonHandler } = useAccountStore();

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

        <TemplateButton isButtonDisabled={!currentAccount} />

        <Popconfirm
          title="Закрыть текущий счёт?"
          icon={(
            <QuestionCircleOutlined
              style={{ color: 'red' }}
            />
)}
          onConfirm={() => deleteAccountButtonHandler(currentAccount, user)}
          disabled={!currentAccount}
        >
          <Button style={{ boxShadow: '1px 1px 4px #000' }} disabled={!currentAccount} htmlType="button">Закрыть счет</Button>
        </Popconfirm>
      </Row>
    </>
  );
};
