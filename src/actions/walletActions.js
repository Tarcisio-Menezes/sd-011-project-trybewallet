import { getCurrencies } from '../services/api';

export const REQUEST_CURRENCIES = 'REQUES_CURRENCIES';
export const REQUEST_CURRENCIES_SUCESS = 'REQUES_CURRENCIES_SUCESS';
export const REQUEST_CURRENCIES_ERROR = 'REQUES_CURRENCIES_ERROR';

export const requestCurrencies = () => ({
  type: REQUEST_CURRENCIES,

});

export const requestCurrenciesSucess = (payload) => ({
  type: REQUEST_CURRENCIES_SUCESS,
  payload,
});

export const requestCurrenciesError = (error) => ({
  type: REQUEST_CURRENCIES_ERROR,
  error,
});

export function fetchApi() {
  return (dispatch) => {
    dispatch(requestCurrencies());
    return getCurrencies()
      .then(
        (payload) => dispatch(requestCurrenciesSucess(payload)),
        (error) => dispatch(requestCurrenciesError(error.message)),
      );
  };
}
