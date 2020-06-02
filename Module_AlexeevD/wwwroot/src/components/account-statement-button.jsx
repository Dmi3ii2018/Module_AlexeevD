import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Button, Modal, Descriptions, Divider,
} from 'antd';
import { AccountHistoryActionCreator } from '../actions/account-history-actions';
import { AccountHistory } from './account-history';
import { convertHistory } from '../utils/convert-account-history';

export const AccountStatementButton = ({ user, account, isButtonDisabled }) => {
  const [isModalVisible, setModal] = useState(false);
  const isLoading = useSelector(({ accountHistoryReducer }) => accountHistoryReducer.loading);

  const accountOperations = useSelector(({ accountHistoryReducer }) => {
    if (accountHistoryReducer.accountHistory.length > 0) {
      return convertHistory(accountHistoryReducer.accountHistory);
    }
    return null;
  });

  const dispatch = useDispatch();

  const handleCancel = () => setModal(false);

  return (
    <>
      <Button
        htmlType="button"
        loading={isLoading}
        disabled={isButtonDisabled}
        style={{ boxShadow: '1px 1px 4px #000' }}
        onClick={() => {
          dispatch(AccountHistoryActionCreator.getAccountHistoryRequest(account.accountNumber));
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
