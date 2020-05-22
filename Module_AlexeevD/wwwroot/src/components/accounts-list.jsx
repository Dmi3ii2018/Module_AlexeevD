import React from 'react';
import { Row, Col, Select, Button, Popconfirm } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { AccountActionCreator } from '../actions/account-actions';
import { AccountHistoryActionCreator } from '../actions/account-history-actions';
import { QuestionCircleOutlined } from '@ant-design/icons';

const { Option } = Select;

export const AccountsList = () => {
    const user = useSelector(({ userReducer }) => userReducer.user);
    const accounts = useSelector(({ accountReducer }) => accountReducer.accounts);
    const currentAccountId = useSelector(({ accountReducer }) => accountReducer.displayedAccountId)

    const currentAccount = useSelector(({ accountReducer }) => {
        if(!accountReducer.accounts.length) {
            return false;
        }
        return accountReducer.accounts.find(account => account.accountId == currentAccountId);
    })

    const dispatch = useDispatch();

    const chooseAccountHandler = (id) => {
        dispatch(AccountActionCreator.accountSetDisplayed(id));
        dispatch(AccountHistoryActionCreator.getAccountHistorySuccess([]));
    };

    const newAccountButtonHandler = () => {
        dispatch(AccountActionCreator.accountOpenNew(user.id))
    }

    return (
        <Col span={6}>
            <Row justify='center'>
            <Select
                style={{ width: '70%' }}
                placeholder='Choose account'
                onChange={(_, option) => chooseAccountHandler(option.key)}
            >
                {accounts.map(({accountNumber, sum, accountId}) => {
                    return <Option key={accountId} value={accountNumber} >{`${accountNumber} (${sum})`}</Option>
                })}
            </Select>
            <Popconfirm
                title="Открыть новый счёт?"
                icon={<QuestionCircleOutlined
                style={{ color: 'red' }} />}
                onConfirm={newAccountButtonHandler}
            >
                <Button htmlType='button' style={{ width: '90%' }}>Открыть новый счет</Button>
            </Popconfirm>
            </Row>
        </Col>
    )
}