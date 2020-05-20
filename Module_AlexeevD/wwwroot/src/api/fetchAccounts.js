import { api } from '../index.js';
import moment from 'moment';

const TypeOfOperation = {
    SEND: 0,
    RECEIVE: 1,
    PUT: 2,
    TAKE: 3,
    CLOSE: 4
}

export const fetchAccount = (UserId) => {
    return api.get(`/User/GetAccount/${UserId}`, {
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token')
          }
    });
}

export const putFundApi = ({sum, ReceiverAccountNumber}) => {
    return api.post(`/Account/PutFund`,{
        Date: moment().format('YYYY-MM-DD'),
        Sum: sum,
        ReceiverAccountNumber,
        TypeOfOperation: TypeOfOperation.PUT,
    }, {
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token')
          }
    });
}

export const transactionApi = ({sum, receiverAccountNumber, senderAccountNumber}) => {
    return api.post(`/Account/CreateTransaction`,{
        Date: moment().format('YYYY-MM-DD'),
        Sum: sum,
        ReceiverAccountNumber: receiverAccountNumber,
        SenderAccountNumber: senderAccountNumber,
        TypeOfOperation: TypeOfOperation.SEND,
    }, {
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token')
          }
    });
}