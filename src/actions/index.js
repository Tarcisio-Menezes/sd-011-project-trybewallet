// Coloque aqui suas actions
import { fecthAPI } from '../services';

export const NEW_USER = 'NEW_USER';
export const REQUEST_API = 'REQUEST_API';
export const REQUEST_ERROR = 'REQUEST_ERROR';
export const REQUEST_SUCCESS = 'REQUEST_SUCCESS';

export const newUser = (payload) => ({
  type: NEW_USER,
  payload,
});

const requestAPI = (payload) => ({
  type: REQUEST_API,
  payload,
});

const requestError = (payload) => ({
  type: REQUEST_ERROR,
  payload,
});

const requestSuccess = (payload) => ({
  type: REQUEST_SUCCESS,
  payload,
});

export function setCoins() {
  return (dispatch) => {
    dispatch(requestAPI());
    return fecthAPI()
      .then(
        (data) => dispatch(requestSuccess(Object.keys(data))),
        (error) => dispatch(requestError(error.message)),
      );
  };
}
