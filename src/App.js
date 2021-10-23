import React from 'react';
import { Route, Switch } from 'react-router';
import Login from './pages/Login';
import Wallet from './pages/Wallet';

class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/trybeWallet" component={ Login } />
        <Route path="/trybeWallet/carteira" component={ Wallet } />
      </Switch>
    );
  }
}

export default App;
