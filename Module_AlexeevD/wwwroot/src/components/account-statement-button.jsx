import React, { useState } from 'react';
import { useAccountHistoryStore } from '../ducks/accountHistory/account-history-hooks';
import { Button, Modal, Descriptions, Divider } from 'antd';
import { AccountHistory } from './account-history';
import { useAccountStore } from '../ducks/account/account-hooks';
import { AccountStatementIcon } from '../svg-icons/account-statement-icon';

export const AccountStatementButton = ({ user, account, isButtonDisabled, buttonStyle }) => {
  const [isModalVisible, setModal] = useState(false);

  const { currentAccount } = useAccountStore();
  const { isLoading, accountOperations, getAccountHistory } = useAccountHistoryStore();

  const handleCancel = () => setModal(false);

  return (
    <>
      <Button
        htmlType="button"
        loading={isLoading}
        disabled={isButtonDisabled}
        style={buttonStyle}
        icon={<AccountStatementIcon />}
        onClick={() => {
          getAccountHistory(currentAccount);
          setModal(true);
        }}
      >
        Выписка
      </Button>

      <Modal
        title="Выписка"
        visible={isModalVisible}
        onCancel={handleCancel}
        onOk={handleCancel}
        width="70%"
      >

        <Descriptions column={1} title="Реквизиты счёта" bordered>
          <Descriptions.Item label="Имя">{user.name}</Descriptions.Item>
          <Descriptions.Item label="email">{user.login}</Descriptions.Item>
          <Descriptions.Item label="Номер счета">{account.accountNumber}</Descriptions.Item>
        </Descriptions>

        <Divider orientation="left">История операций по счёту</Divider>

        <AccountHistory operations={accountOperations} />

      </Modal>
    </>
  );
};
