import React from 'react';
import { Row, Col, Select, Button, Popconfirm } from 'antd';
import { useAccountStore } from '../ducks/account/account-hooks';
import { useUserStore } from '../ducks/user/user-hooks';
import { useAccountHistoryStore } from '../ducks/accountHistory/account-history-hooks';
import { QuestionCircleOutlined } from '@ant-design/icons';

const { Option } = Select;

export const AccountsList = () => {
  const { user } = useUserStore();
  const { accountsList, setDisplayedAccount, openNewAccount } = useAccountStore();
  const { getAccountHistorySuccess } = useAccountHistoryStore();

  const chooseAccountHandler = (id) => {
    setDisplayedAccount(id);
    getAccountHistorySuccess();
  };

  const newAccountButtonHandler = () => {
    openNewAccount(user.id);
  };

  const newAccountStyle = {
    background: '#FFFFFF',
    borderRadius: '10px',
    width: '90%',
  }

  const buttonStyle = {
    marginTop: '20px',
    height: '44px',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    ...newAccountStyle
  }

  const accountListStyle = {
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '110px',
    alignItems: 'flex-end',
  }

  return (
    <Col span={6}>
      <Row style={accountListStyle}>
        <Select
          style={newAccountStyle}
          placeholder="Choose account"
          onChange={(_, option) => chooseAccountHandler(option.key)}
        >
          {accountsList.map(({ accountNumber, sum, accountId }) => <Option key={accountId} value={accountNumber}>{`${accountNumber} (${sum})`}</Option>)}
        </Select>

        <Popconfirm
          title="Открыть новый счёт?"
          icon={(
            <QuestionCircleOutlined
              style={{ color: 'red' }}
            />
          )}
          onConfirm={newAccountButtonHandler}
        >
          <Button htmlType="button" style={buttonStyle}>Открыть новый счет</Button>
        </Popconfirm>
      </Row>
    </Col>
  );
};
