// Coloque aqui suas actions

export const REQUEST_COINS = 'REQUEST_COINS';
export const REQUEST_COINS_SUCCESS = 'REQUEST_COINS_SUCCESS';
export const REQUEST_COINS_ERROR = 'REQUEST_COINS_ERROR';
export const SAVE_LOGIN = 'SAVE_LOGIN';

export const saveLogin = (email) => ({
  type: SAVE_LOGIN,
  email,
});

export const requestCoins = () => ({
  type: REQUEST_COINS,
});

export const requestCoinsuccess = (data) => ({
  type: REQUEST_COINS_SUCCESS,
  data,
});

export const requestCoinsError = (data) => ({
  type: requestCoinsError,
  data,
});

export const fetchCoins = () => (dispatch) => {
  dispatch(requestCoins());
  return fetch('https://economia.awesomeapi.com.br/json/all')
    .then((result) => result.json())
    .then((data) => dispatch(requestCoinsuccess(data)))
    .catch((error) => dispatch(requestCoinsError(error)));
};
