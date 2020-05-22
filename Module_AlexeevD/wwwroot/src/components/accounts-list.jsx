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

    const dispatch = useDispatch();

    const chooseAccountHandler = (id) => {
        dispatch(AccountActionCreator.accountSetDisplayed(id));
        dispatch(AccountHistoryActionCreator.getAccountHistorySuccess([]));
    };

    const newAccountButtonHandler = () => {
        dispatch(AccountActionCreator.accountOpenNew(user.id))
    }

    return (
        <Col span={6} style={{padding: '10px'}}>
            <Row justify='center'>
            <Select
                style={{ width: '70%', margin: '20px 0' }}
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
                <Button htmlType='button' style={{ width: '70%', boxShadow: '1px 1px 4px #000' }}>Открыть новый счет</Button>
            </Popconfirm>
            </Row>
        </Col>
    )
}