import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends React.Component {
  render() {
    const totalCost = 0;
    const { email } = this.props;
    return (
      <header>
        <div data-testid="email-field">
          {email}
        </div>
        <div data-testid="total-field">
          Despesa Total
          {totalCost}
        </div>
        <div data-testid="header-currency-field">
          BRL
        </div>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
});

Header.propTypes = {
  email: PropTypes.string,
}.isRequired;

export default connect(mapStateToProps)(Header);
