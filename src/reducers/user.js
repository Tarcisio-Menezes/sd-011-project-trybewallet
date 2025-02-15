// Esse reducer será responsável por tratar as informações da pessoa usuária
import { SAVE_LOGIN } from '../actions';

const INITIAL_STATE = {
  email: '',
};

function loginReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case SAVE_LOGIN:
    return {
      ...state,
      email: action.email,
    };
  default:
    return state;
  }
}

export default loginReducer;
