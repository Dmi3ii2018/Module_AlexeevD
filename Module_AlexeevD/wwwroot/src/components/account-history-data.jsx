import React, { useState } from 'react';
import { useAccountHistoryStore } from '../ducks/accountHistory/account-history-hooks';
import { useAccountStore } from '../ducks/account/account-hooks';
import { Row, DatePicker, Descriptions, Button } from 'antd';
import moment from 'moment';
import { AccountHistory } from './account-history';

const { RangePicker } = DatePicker;

export const AccountHistoryData = () => {
  const [isAccountOperationsVisible, setOperationsVisibility] = useState(false);
  const [accountData, setAccountOperation] = useState([]);

  const disabledDate = (current) => current && current > moment().endOf('day');

  const { isLoading, accountOperations, getAccountHistory } = useAccountHistoryStore();
  const { currentAccountId, currentAccount } = useAccountStore();

  const historyButtonHandler = () => {
    getAccountHistory(currentAccount);
    setOperationsVisibility(true);
    setAccountOperation(accountOperations);
  };

  const onChange = (_, dateString) => {
    const [start, end] = dateString;

    if (!start && !end) {
      setAccountOperation(accountOperations);
      return;
    }

    let dateRangeOperations = accountOperations.slice();

    dateRangeOperations = dateRangeOperations.filter((it) => {
      if (start <= it.date && it.date < end) {
        return true;
      }
      return false;
    });

    setAccountOperation(dateRangeOperations);
  };

  const buttonStyle = {
    background: '#FFFFFF',
    borderRadius: '10px',
    height: '44px',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
  }

  return (
    <>
      <Row justify="space-between">
        <Button
          onClick={historyButtonHandler}
          loading={isLoading}
          style={buttonStyle}
          disabled={!currentAccountId}
        >
          История операций по счету
        </Button>
        <Descriptions style={{width: '46%'}}>
          <Descriptions.Item label="Период ">
            <RangePicker
              style={buttonStyle}
              format="DD/MM/YYYY"
              disabledDate={disabledDate}
              onChange={onChange}
              disabled={!accountOperations.length}
            />
          </Descriptions.Item>
        </Descriptions>
      </Row>

      { isAccountOperationsVisible && !!accountOperations.length ? <AccountHistory operations={accountData.length ? accountData : accountOperations} /> : null }
    </>
  );
};
