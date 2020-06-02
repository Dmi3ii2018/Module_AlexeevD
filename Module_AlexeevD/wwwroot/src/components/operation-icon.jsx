import React from 'react';
import { UpCircleTwoTone, DownCircleTwoTone, CloseCircleTwoTone } from '@ant-design/icons';
import { OperationName as operation } from '../utils/consts';

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
      return <CloseCircleTwoTone />;
  }
};
