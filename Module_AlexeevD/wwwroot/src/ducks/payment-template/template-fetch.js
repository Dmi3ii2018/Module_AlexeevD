import { api } from '../index.js';

export const fetchTemplate = (UserId) => api.get(`/User/GetTemplates/${UserId}`, {
  headers: {
    Authorization: `Bearer ${localStorage.getItem('token')}`,
  },
});

export const createTemplate = ({userId, account, paymentName, receiverName, receiverEmail, purpose }) => api.post(`/User/CreateTemplate`, {
    UserId: userId,
    Account: account,
    PaymentName: paymentName,
    ReceiverName: receiverName,
    ReceiverEmail: receiverEmail,
    Purpose: purpose,
}, {
    headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      }
});