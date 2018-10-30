import React, { Component } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import asyncComponent from './hoc/asyncComponent/asyncComponent';

import Layout from './hoc/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Connect from './Connect';

import Logout from './containers/Auth/Logout/Logout';
import * as actions from './store/actions/index';

// Lazy Loading
const asyncCheckout = asyncComponent(() => {
  return import('./containers/Checkout/Checkout');
});

const asyncOrders = asyncComponent(() => {
  return import('./containers/Orders/Orders');
});

const asyncAuth = asyncComponent(() => {
  return import('./containers/Auth/Auth');
});

// export const appConnect = new Connect();

class App extends Component {
  componentDidMount() {
    this.props.onTryAutoSignup();
  }

  // constructor(props) {
  //   super(props);
  //   appConnect.register(function(props) {
  //     console.log(props);
  //   });
  // }
  render() {
    let routes = (
      <Switch>
        <Route path="/auth" component={asyncAuth} exact />
        <Route path="/" component={BurgerBuilder} exact />
        <Redirect to="/" />
      </Switch>
    );

    if (this.props.isAuthenticated) {
      routes = (
        <Switch>
          <Route path="/checkout" component={asyncCheckout} />
          <Route path="/orders" component={asyncOrders} exact />
          <Route path="/logout" component={Logout} exact />
          <Route path="/auth" component={asyncAuth} exact />
          <Route path="/" component={BurgerBuilder} exact />
          <Redirect to="/" />
        </Switch>
      );
    }

    return (
      <div>
        <Layout>{routes}</Layout>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState())
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
);
