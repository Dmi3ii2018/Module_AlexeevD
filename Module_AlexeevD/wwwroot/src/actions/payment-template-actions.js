export const PaymentTemplateAction = {
  GET_PAYMENT_TEMPLATE_REQQUEST: 'PAYMENT_TEMPLATE_REQQUEST',
  GET_PAYMENT_TEMPLATE_SUCCESS: 'PAYMENT_TEMPLATE_SUCCESS',
  GET_PAYMENT_TEMPLATE_ERROR: 'PAYMENT_TEMPLATE_ERROR',
};

export const PaymentTemplateActionCreator = {
  getPaymentTemplateRequest: () => ({
    type: PaymentTemplateAction.GET_PAYMENT_TEMPLATE_REQQUEST,
  }),
  getPaymentTemplateSuccess: (payload) => ({
    type: PaymentTemplateAction.GET_PAYMENT_TEMPLATE_SUCCESS,
    payload,
  }),
  getPaymentTemplateError: (payload) => ({
    type: PaymentTemplateAction.GET_PAYMENT_TEMPLATE_ERROR,
    payload,
  }),
};
