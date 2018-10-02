import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from './hoc/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Connect from './Connect';
import Checkout from './containers/Checkout/Checkout';

// export const appConnect = new Connect();

class App extends Component {
  // constructor(props) {
  //   super(props);
  //   appConnect.register(function(props) {
  //     console.log(props);
  //   });
  // }
  render() {
    return (
      <div>
        <Layout>
          <Switch>
            <Route path="/checkout" component={Checkout} />
            <Route path="/" component={BurgerBuilder} exact />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
