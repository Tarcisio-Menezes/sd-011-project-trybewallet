// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const INITIAL_STATE = {
  user: {
    email: '',
  },
  wallet: {
    currencies: [],
    expenses: [],
  },
};

export default function reducerWallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  default:
    return state;
  }
}
