import moment from 'moment';
import { operationIndexToOperationName } from './consts';

export const convertHistory = (operations) => {
  const convertedOperations = [];

  operations.forEach((operation) => {
    const item = {
      date: moment(operation.date).format('DD/MM/YYYY'),
      typeofoperation: operationIndexToOperationName[operation.typeofoperation],
      sum: operation.sum,
      accountsendernumber: operation.accountsendernumber,
      accountreceivernumber: operation.accountreceivernumber,
    };
    convertedOperations.push(item);
  });
  return convertedOperations;
};
