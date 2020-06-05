import React from 'react';
import { Table } from 'antd';
import uid from 'uid';
import moment from 'moment';
import { OperationIcon } from './operation-icon';
import { OperationName } from '../utils/consts';
import { createFilterData } from '../common/filter-data'

const { Column } = Table;

export const AccountHistory = ({ operations }) => (
  <Table
    dataSource={operations}
    rowKey={() => uid()}
    pagination={false}
    scroll={{ y: 200 }}
    pagination={{ pageSize: 50 }}
  >
    <Column
      key={() => uid()}
      dataIndex="typeofoperation"
      render={(typeofoperation) => <OperationIcon operationType={typeofoperation} />}
    />
    <Column
      title="Дата"
      dataIndex="date"
      key="date"
      sorter={(a, b) => moment(a.date, 'DD-MM-YYYY') - moment(b.date, 'DD-MM-YYYY')}
      sortDirections={['descend', 'ascend']}
    />
    <Column
      title="Операция"
      dataIndex="typeofoperation"
      key="typeofoperation"
      filters={createFilterData(OperationName)}
      filterMultiple={false}
      onFilter={(value, record) => record.typeofoperation.indexOf(value) === 0}
    />
    <Column
      title="Сумма"
      dataIndex="sum"
      key="sum"
      sorter={(a, b) => a.sum - b.sum}
      sortDirections={['descend', 'ascend']}
    />
    <Column title="Счёт получателя" dataIndex="accountreceivernumber" key="accountreceivernumber" />
    <Column title="Счёт отправителя" dataIndex="accountsendernumber" key="accountsendernumber" />
  </Table>
);
