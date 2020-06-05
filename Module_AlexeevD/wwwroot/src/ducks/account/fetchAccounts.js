import moment from 'moment';
import { api } from '../index.js';
import { TypeOfOperation } from '../../utils/consts';

export const fetchAccount = (UserId) => api.get(`/User/GetAccount/${UserId}`, {
  headers: {
    Authorization: `Bearer ${localStorage.getItem('token')}`,
  },
});

export const putFundApi = ({ sum, ReceiverAccountNumber }) => api.post('/Account/PutFund', {
  Date: moment().format('YYYY-MM-DD'),
  Sum: sum,
  ReceiverAccountNumber,
  TypeOfOperation: TypeOfOperation.PUT,
}, {
  headers: {
    Authorization: `Bearer ${localStorage.getItem('token')}`,
  },
});

export const transactionApi = ({ sum, receiverAccountNumber, senderAccountNumber }) => api.post('/Account/CreateTransaction', {
  Date: moment().format('YYYY-MM-DD'),
  Sum: sum,
  ReceiverAccountNumber: receiverAccountNumber,
  SenderAccountNumber: senderAccountNumber,
  TypeOfOperation: TypeOfOperation.SEND,
}, {
  headers: {
    Authorization: `Bearer ${localStorage.getItem('token')}`,
  },
});

export const createNewAccountApi = (userId) => api.post('/Account/CreateAccount', {
  Sum: 0,
  UserId: userId,
}, {
  headers: {
    Authorization: `Bearer ${localStorage.getItem('token')}`,
  },
});

export const deleteAccountApi = (accountNumber) => api.get(`/Account/DeleteAccount/${accountNumber}`, {
  headers: {
    Authorization: `Bearer ${localStorage.getItem('token')}`,
  },
});
