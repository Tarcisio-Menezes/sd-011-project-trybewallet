export const ADD_USER = 'ADD_USER';
export const RECEIVE_CURRENCIES = 'RECEIVE_CURRENCIESS';
export const ADD_EXPENSES = 'ADD_EXPENSES';

export const signIn = (payload) => ({
  type: ADD_USER,
  payload,
});

export const receiveCurrencies = (currencies) => ({
  type: RECEIVE_CURRENCIES,
  payload: {
    currencies,
  },
});

// https://blog.coderockr.com/posts/2016/requisicoes-assincronas-em-redux/
export function fetchApiCoin() {
  return (dispatch) => {
    fetch('https://economia.awesomeapi.com.br/json/all')
      .then((response) => response.json())
      .then((currencie) => {
        delete currencie.USDT;
        dispatch(receiveCurrencies(currencie));
      });
  };
}

export const addExpenses = (expenses) => ({
  type: ADD_EXPENSES,
  payload: {
    expenses,
  },
});

export const fetchApi = (expense) => (dispatch) => {
  fetch('https://economia.awesomeapi.com.br/json/all')
    .then((response) => response.json())
    .then((resp) => {
      expense.exchangeRates = resp;
      dispatch(addExpenses(expense));
    });
};
