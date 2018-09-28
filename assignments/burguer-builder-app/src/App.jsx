import React, { Component } from 'react';
import Layout from './components/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Connect from './Connect';

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
          <BurgerBuilder />
        </Layout>
      </div>
    );
  }
}

export default App;
