// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { REMOVE_EXPENSE } from '../actions/removeExpense';
import { SUBMIT_CURRENCIES } from '../actions/submitCurrencies';
import { SUBMIT_EXPENSES } from '../actions/submitExpenses';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SUBMIT_EXPENSES:
    return {
      ...state,
      currencies: state.currencies,
      expenses: [...state.expenses, {
        id: (state.expenses.length !== 0 ? state.expenses.length : 0),
        value: action.state.value,
        description: action.state.description,
        currency: action.state.currency,
        method: action.state.method,
        tag: action.state.tag,
        exchangeRates: action.exchange,
      }],
    };
  case REMOVE_EXPENSE:
    return {
      ...state,
    };
  case SUBMIT_CURRENCIES:
    return {
      ...state,
      currencies: action.array,
    };
  default:
    return state;
  }
};

export default wallet;
