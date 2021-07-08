import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchAPI, receiveNewItem } from '../actions';

class FormAddValue extends Component {
  constructor() {
    super();
    this.state = {
      id: 0,
      value: '0',
      description: '',
      currency: 'USD',
      method: 'dinheiro',
      tag: 'alimentação',
      exchangeRates: {},
    };
    this.addItem = this.addItem.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name } = target;
    const { value } = target;
    this.setState({
      [name]: value,
    });
  }

  async addItem() {
    const { fetch, newItem, itemsTable, currenciesState } = this.props;
    await fetch();
    this.setState({
      id: itemsTable.length,
      exchangeRates: currenciesState,
    });
    newItem(this.state);
    this.setState({
      value: 0,
      description: '',
      currency: 'USD',
      method: 'dinheiro',
      tag: 'alimentação',
    });
  }

  render() {
    const { currenciesState } = this.props;
    const currencies = Object.keys(currenciesState);
    const currenciesFilter = currencies.filter((value) => value !== 'USDT');
    return (
      <form>
        <label htmlFor="value">
          Valor:
          <input type="number" id="value" onChange={ this.handleChange } name="value" />
        </label>
        <label htmlFor="description">
          Descrição:
          <input
            id="description"
            type="text"
            onChange={ this.handleChange }
            name="description"
          />
        </label>
        <label htmlFor="currency">
          Moeda:
          <select id="currency" onChange={ this.handleChange } name="currency">
            {currenciesFilter.map((value) => (
              <option value={ value } key={ value }>
                { value }
              </option>))}
          </select>
        </label>
        <label htmlFor="method">
          Método de pagamento:
          <select id="method" onChange={ this.handleChange } name="method">
            <option value="dinheiro">Dinheiro</option>
            <option value="crédito">Cartão de crédito</option>
            <option value="débito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag:
          <select id="tag" onChange={ this.handleChange } name="tag">
            <option value="alimentação">Alimentação</option>
            <option value="lazer">Lazer</option>
            <option value="trabalho">Trabalho</option>
            <option value="transporte">Transporte</option>
            <option value="saúde">Saúde</option>
          </select>
        </label>
        <button type="reset" onClick={ this.addItem }>Adicionar despesa</button>
      </form>
    );
  }
}

FormAddValue.propTypes = {
  currenciesState: PropTypes.arrayOf,
  itemsTable: PropTypes.arrayOf,
  fetch: PropTypes.func,
  newItem: PropTypes.func,
};

FormAddValue.defaultProps = {
  currenciesState: {},
  itemsTable: {},
  fetch: undefined,
  newItem: undefined,
};

const mapStateToProps = (state) => ({
  currenciesState: state.wallet.currencies,
  itemsTable: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  fetch: () => dispatch(fetchAPI()),
  newItem: (state) => dispatch(receiveNewItem(state)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FormAddValue);
