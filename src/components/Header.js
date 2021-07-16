import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends React.Component {
  // totalExpense() {
  //   const { expensesResult } = this.props;
  //   let sum = 0;
  //   expensesResult.forEach(({ value, currency, exchangeRates }) => {
  //     sum += exchangeRates[currency].ask * value;
  //   });
  //   return sum.toFixed(2);
  // }

  render() {
    const { username, expensesResult } = this.props;
    const noExpense = () => {
      if (expensesResult.length === 0) {
        return true;
      }
      return false;
    };

    return (
      <div>
        <header className="wallet-header">
          <div>
            <p data-testid="email-field">
              Email:
              { username }
            </p>
          </div>
          <div className="despesa-moeda">
            <div data-testid="total-field">
              Despesa total: R$
              {
                noExpense() ? 0 : expensesResult.reduce((acc, expense) => {
                  const curr = Number(expense.exchangeRates[expense.currency].ask);
                  acc += parseFloat(curr) * parseFloat(Number(expense.value));
                  return acc;
                }, 0).toFixed(2)
              }
            </div>
            <p data-testid="header-currency-field">
              BRL
            </p>
          </div>
        </header>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  username: state.user.email,
  expensesResult: state.wallet.expenses,
});

export default connect(mapStateToProps)(Header);

Header.propTypes = {
  username: PropTypes.string.isRequired,
  expensesResult: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func])),
}.isRequired;
