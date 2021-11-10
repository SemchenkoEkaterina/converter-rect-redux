import { fetchCurrencyPending, fetchCurrencySuccess, fetchCurrencyError } from '../currency/actions/actions';

function fetchCurrency() {
  return (dispatch) => {
    dispatch(fetchCurrencyPending());
    fetch('https://www.cbr-xml-daily.ru/daily_json.js', {
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.error) {
          throw (res.error);
        }
        dispatch(fetchCurrencySuccess(res));
        return res;
      })
      .catch((error) => {
        dispatch(fetchCurrencyError(error));
      });
  };
}

export default fetchCurrency;
