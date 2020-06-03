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

  return (
    <Col span={6} style={{ padding: '10px' }}>
      <Row justify="center">
        <Select
          style={{ width: '70%', margin: '20px 0' }}
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
          <Button htmlType="button" style={{ width: '70%', boxShadow: '1px 1px 4px #000' }}>Открыть новый счет</Button>
        </Popconfirm>
      </Row>
    </Col>
  );
};
