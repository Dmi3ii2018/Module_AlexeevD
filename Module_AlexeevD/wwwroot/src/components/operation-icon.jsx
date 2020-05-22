import React from 'react'
import { OperationName as operation } from '../utils/consts';
import { UpCircleTwoTone, DownCircleTwoTone, CloseCircleTwoTone } from '@ant-design/icons';

export const OperationIcon = ({ operationType }) => {
    switch (operationType) {
        case operation.PUT:
            return <UpCircleTwoTone twoToneColor="#52c41a" />;
        case operation.TRANSACTION:
            return <DownCircleTwoTone twoToneColor="#eb2f96" />;
        case operation.RECEIVE:
            return <UpCircleTwoTone twoToneColor="#52c41a" />;
        case operation.TEMPLATE_PAYMENT:
            return <DownCircleTwoTone twoToneColor="#eb2f96" />;
        case operation.TAKE:
            return <DownCircleTwoTone twoToneColor="#eb2f96" />;
        case operation.CLOSE:
            return <CloseCircleTwoTone />
    }
}