import { connect } from 'react-redux';
import React, { Component } from 'react';
import actionEvent from '../actions';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      psw: '',
      enable: true,
    };
    this.onChangeInput = this.onChangeInput.bind(this);
    this.validState = this.validState.bind(this);
    this.evClick = this.evClick.bind(this);
  }

  componentDidUpdate() {
    this.validState();
  }

  onChangeInput({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  validState() {
    const { email, psw, enable } = this.state;
    const validMail = /(.+)@(.+){2,}\.(.+){3,}/.test(email);

    const min = 5;
    if (validMail && psw.length > min && enable) {
      this.setState({ enable: false });
    } else if ((!validMail || !psw.length > min) && !enable) {
      this.setState({ enable: true });
    }
  }

  evClick(ev, v) {
    ev(v);
  }

  render() {
    const { email, psw, enable } = this.state;
    const { sendEvLogin } = this.props;

    return (
      <form>
        <input
          type="email"
          name="email"
          onChange={ this.onChangeInput }
          value={ email }
          data-testid="email-input"
        />
        <input
          type="password"
          name="psw"
          onChange={ this.onChangeInput }
          value={ psw }
          data-testid="password-input"
        />
        <button
          type="button"
          disabled={ enable }
          onClick={ () => this.evClick(sendEvLogin, email) }
        >
          Entrar
        </button>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  stateLogin: state,
});

const submitLogin = (dispatch) => ({
  sendEvLogin: (value) => dispatch(actionEvent(value)),
});

export default connect(mapStateToProps, submitLogin)(Login);
