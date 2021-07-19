// Coloque aqui suas actions
export const USER_EMAIL = 'USER_EMAIL';
export const CURRENCIES = 'CURRENCIES';
export const RECEIVE_API = 'RECEIVE_API';

function storeUserEmail(email, logged) {
  return {
    type: USER_EMAIL,
    payload: email,
    logged,
  };
}

export function storeCurrencies(payload) {
  return {
    type: CURRENCIES,
    payload,
  };
}

export function APIRequest(payload) {
  return { type: RECEIVE_API };
}

export const fetchCurrencyList = () => async () => {
  dispatch(APIRequest());
  // const response = await fetch('https://economia.awesomeapi.com.br/json/all');
  // const responseObject = await response.json();
  // store.dispatch(storeCurrencies(responseObject));
  // return responseObject;
};

export default storeUserEmail;
