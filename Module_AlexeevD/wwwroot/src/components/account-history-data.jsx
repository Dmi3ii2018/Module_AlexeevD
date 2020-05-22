import React, { useState }  from 'react';
import { Row, DatePicker, Descriptions, Button } from 'antd';
import moment from 'moment';
import { AccountHistory } from './account-history';
import { convertHistory } from '../utils/convert-account-history';
import { useSelector, useDispatch } from 'react-redux';
import { AccountHistoryActionCreator } from '../actions/account-history-actions';

const { RangePicker } = DatePicker;

export const AccountHistoryData = () => {
    const [isAccountOperationsVisible, setOperationsVisibility] = useState(false);
    const [accountData, setAccountOperation] = useState([]);

    const  disabledDate = (current) => {
        return current && current > moment().endOf('day');
    }

    const accountHistoryStyle = {
        width: '60%'
    }

    const isLoading = useSelector(({ accountHistoryReducer }) => accountHistoryReducer.loading);
    const currentAccountId = useSelector(({ accountReducer }) => accountReducer.displayedAccountId)

    const currentAccount = useSelector(({ accountReducer }) => {
        if(!accountReducer.accounts.length) {
            return false;
        }
        return accountReducer.accounts.find(account => account.accountId == currentAccountId);
    });

    const accountOperations = useSelector(({accountHistoryReducer}) => {
        if(accountHistoryReducer.accountHistory.length > 0) {
            return convertHistory(accountHistoryReducer.accountHistory);
        }
        return [];
    });

    const dispatch = useDispatch();

    const historyButtonHandler = () => {
        dispatch(AccountHistoryActionCreator.getAccountHistoryRequest(currentAccount.accountNumber));
        setOperationsVisibility(true);
        setAccountOperation(accountOperations);
    }

    const onChange = (_, dateString) => {
        console.log('Formatted Selected Time: ', dateString);

        const [start, end] = dateString;

        if(!start && !end) {
            setAccountOperation(accountOperations);
            return;
        }

        let dateRangeOperations = accountOperations.slice();

        dateRangeOperations = dateRangeOperations.filter((it) => {
            if (start <= it.date && it.date < end) {
                return true;
            }
            return false;
        })

        setAccountOperation(dateRangeOperations);
      }

    return (
        <>
            <Row justify='space-between'>
                <Button
                    onClick={historyButtonHandler}
                    loading={isLoading}
                    disabled={currentAccountId ? false : true}
                >
                        История операций по счету
                </Button>
                <Descriptions style={accountHistoryStyle}>
                    <Descriptions.Item label="Период ">
                        <RangePicker
                            format='DD/MM/YYYY'
                            disabledDate={disabledDate}
                            onChange={onChange}
                            disabled={accountOperations.length ? false : true}
                        />
                    </Descriptions.Item>
                </Descriptions>
            </Row>

            { isAccountOperationsVisible && accountOperations.length ? <AccountHistory operations={accountData.length ? accountData : accountOperations} /> : null }
        </>
    )
}