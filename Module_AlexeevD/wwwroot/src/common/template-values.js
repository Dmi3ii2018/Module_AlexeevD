export const setTemplateValues = (values) => {
    if (values) {
        return {
            accountNumber: values.account,
            paymentName: values.paymentName,
            receiverName: values.receiverName,
            receiverEmail: values.receiverEmail,
            purposeOfPayment: values.purpose
        }
    }
}