import React, { useState } from 'react';
import { Button, Modal, message } from 'antd';
import { useAccountStore } from '../ducks/account/account-hooks';
import PutFundForm from './put-fund-form';

export const PutFundButton = ({
  ReceiverAccountNumber, userId, isLoading, isButtonDisabled,
}) => {
  const [isModalVisible, setModal] = useState(false);

  const { putFund } = useAccountStore();

  const handleCancel = () => setModal(false);

  const onFinish = (value) => {
    putFund({ sum: value.sum, ReceiverAccountNumber, userId });
    handleCancel();
    message.success('Счет пополнен');
  };

  return (
    <>
      <Button
        htmlType="button"
        style={{ boxShadow: '1px 1px 4px #000' }}
        onClick={() => setModal(true)}
        disabled={isButtonDisabled}
      >
        Пополнить
      </Button>

      <Modal
        title="Пополнить счет"
        visible={isModalVisible}
        footer={null}
        closable={!isLoading}
        onCancel={() => handleCancel()}
      >

      <PutFundForm onSubmit={onFinish} loading={isLoading} />

      </Modal>
    </>
  );
};
