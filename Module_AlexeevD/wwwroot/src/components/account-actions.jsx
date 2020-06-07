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
import { CloseAccountIcon } from '../svg-icons/close-account-icon';

export const AccountActions = ({ currentAccount }) => {
  const { user } = useUserStore();
  const { isLoading, accountsList, deleteAccountButtonHandler } = useAccountStore();

  const buttonStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '10px',
    width: '110px',
    height: '110px',
    marginRight: '17px',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
  }

  return (
    <>
      <Row justify="start">
        <PutFundButton
          ReceiverAccountNumber={currentAccount.accountNumber}
          userId={user.id}
          isLoading={user.isLoading}
          isButtonDisabled={!currentAccount}
          buttonStyle={buttonStyle}
        />
        <TransactionButton
          senderAccountNumber={currentAccount.accountNumber}
          userId={user.id}
          isLoading={isLoading}
          currentSum={currentAccount.sum}
          disabled={!accountsList.length}
          accounts={accountsList}
          isButtonDisabled={!currentAccount}
          buttonStyle={buttonStyle}
        />

        <PaymentButton
          isButtonDisabled={!currentAccount}
          buttonStyle={buttonStyle}
        />

        <AccountStatementButton
          user={user}
          account={currentAccount}
          isButtonDisabled={!currentAccount}
          buttonStyle={buttonStyle}
        />

        <TemplateButton
          isButtonDisabled={!currentAccount}
          buttonStyle={buttonStyle}
        />

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
          <Button
            icon={<CloseAccountIcon />}
            style={{
              borderRadius: '10px',
              width: '110px',
              height: '110px',
              paddingTop: '30px',
              marginLeft: '50px',
              boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
            }}
            disabled={!currentAccount}
            htmlType="button">Закрыть счет</Button>
        </Popconfirm>
      </Row>
    </>
  );
};
