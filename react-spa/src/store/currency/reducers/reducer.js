import { FETCH_CURRENCY_PENDING, FETCH_CURRENCY_SUCCESS, FETCH_CURRENCY_ERROR } from '../actions/actionTypes';
import initialState from '../../initialState';

const currencyReducer = (state = initialState.currency, action) => {
  switch (action.type) {
    case FETCH_CURRENCY_PENDING:
      return {
        ...state,
        pending: true,
      };
    case FETCH_CURRENCY_SUCCESS:
      return {
        ...state,
        pending: false,
        currency: action.currency,
      };
    case FETCH_CURRENCY_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error,
      };
    default: return state;
  }
};

export default currencyReducer;
