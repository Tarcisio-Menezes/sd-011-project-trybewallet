// Coloque aqui suas actions
export const REQUEST_VALUES = 'REQUEST_VALUES';
export const RECEIVE_VALUES = 'RECEIVE_VALUES';
export const INPUT_USER = 'INPUT_USER';

export function userAction(email) {
  return ({
    type: INPUT_USER,
    email,
  });
}
export const sendEmail = (email) => ({
  type: 'SEND_EMAIL',
  email,
});

const requestValues = () => ({
  type: REQUEST_VALUES,
});

const receiveValues = (values) => ({
  type: RECEIVE_VALUES,
  values,
});

export function fetchValues() {
  const endpoint = 'https://economia.awesomeapi.com.br/json/all';
  return (dispatch) => {
    dispatch(requestValues());
    return fetch(endpoint)
      .then((response) => response.json())
      .then((obj) => dispatch(receiveValues(obj)));
  };
}
