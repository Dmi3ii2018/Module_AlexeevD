export const OperationName = {
  TRANSACTION: 'TRANSACTION',
  RECEIVE: 'RECEIVE',
  PUT: 'PUT',
  TAKE: 'TAKE',
  CLOSE: 'CLOSE',
  TEMPLATE_PAYMENT: 'TEMPLATE_PAYMENT',
};

export const TypeOfOperation = {
  SEND: 0,
  RECEIVE: 1,
  PUT: 2,
  TAKE: 3,
  CLOSE: 4,
  TEMPLATE_PAYMENT: 5,
};

export const operationIndexToOperationName = {
  0: 'TRANSACTION',
  1: 'RECEIVE',
  2: 'PUT',
  3: 'TAKE',
  4: 'CLOSE',
  5: 'TEMPLATE_PAYMENT',
};
