export const PaymentTemplateAction = {
    GET_PAYMENT_TEMPLATE_REQQUEST: 'PAYMENT_TEMPLATE_REQQUEST',
    GET_PAYMENT_TEMPLATE_SUCCESS: 'PAYMENT_TEMPLATE_SUCCESS',
    GET_PAYMENT_TEMPLATE_ERROR: 'PAYMENT_TEMPLATE_ERROR',
}

export const PaymentTemplateActionCreator = {
    getPaymentTemplateRequest: () => {
        return {
            type: PaymentTemplateAction.GET_PAYMENT_TEMPLATE_REQQUEST,
        }
    },
    getPaymentTemplateSuccess: (payload) => {
        return {
            type: PaymentTemplateActionC.GET_PAYMENT_TEMPLATE_SUCCESS,
            payload,
        }
    },
    getPaymentTemplateError: (paylad) => {
        return {
            type: PaymentTemplateAction.GET_PAYMENT_TEMPLATE_ERROR,
            payload,
        }
    }
}