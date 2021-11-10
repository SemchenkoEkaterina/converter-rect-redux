import { FETCH_CURRENCY_PENDING, FETCH_CURRENCY_SUCCESS, FETCH_CURRENCY_ERROR } from './actionTypes';

export function fetchCurrencyPending() {
  return {
    type: FETCH_CURRENCY_PENDING,
  };
}

export function fetchCurrencySuccess(currency) {
  return {
    type: FETCH_CURRENCY_SUCCESS,
    currency,
  };
}

export function fetchCurrencyError(error) {
  return {
    type: FETCH_CURRENCY_ERROR,
    error,
  };
}
