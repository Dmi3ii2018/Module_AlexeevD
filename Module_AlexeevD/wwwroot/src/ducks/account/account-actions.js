export const AccountActionType = {
  ACCOUNT_FETCH: 'ACCOUNT_FETCH',
  ACCOUNT_GET_SUCCESS: 'ACCOUNT_GET_SUCCESS',
  ACCOUNT_GET_ERROR: 'ACCOUNT_GET_ERROR',
  ACCOUNT_SET_DISPLAYED: 'ACCOUNT_SET_DISPLAYED',
  ACCOUNT_GET_REQUEST: 'ACCOUNT_GET_REQUEST',
  ACCOUNT_PUT_FUND: 'ACCOUNT_PUT_FUND',
  ACCOUNT_MAKE_TRANSACTION: 'ACCOUNT_MAKE_TRANSACTION',
  ACCOUNT_OPEN_NEW: 'ACCOUNT_OPEN_NEW',
  ACCOUNT_DELETE: 'ACCOUNT_DELETE',
};

export const AccountActionCreator = {
  accountFetch: (payload) => ({
    type: AccountActionType.ACCOUNT_FETCH,
    payload,
  }),
  accountGetSuccess: (payload) => ({
    type: AccountActionType.ACCOUNT_GET_SUCCESS,
    payload,
  }),
  accountGetError: (payload) => ({
    type: AccountActionType.ACCOUNT_GET_ERROR,
    payload,
  }),
  accountSetDisplayed: (payload) => ({
    type: AccountActionType.ACCOUNT_SET_DISPLAYED,
    payload,
  }),
  accountPutFund: (payload) => ({
    type: AccountActionType.ACCOUNT_PUT_FUND,
    payload,
  }),
  accountMakeTransaction: (payload) => ({
    type: AccountActionType.ACCOUNT_MAKE_TRANSACTION,
    payload,
  }),
  accountOpenNew: (payload) => ({
    type: AccountActionType.ACCOUNT_OPEN_NEW,
    payload,
  }),
  accountDelete: (payload) => ({
    type: AccountActionType.ACCOUNT_DELETE,
    payload,
  }),
};
