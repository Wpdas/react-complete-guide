import React from 'react';

import Aux from '../Aux/Aux';
import classes from './Layout.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

class Layout extends React.Component {
  state = { showSideDrower: false };

  sideDrawerClosedHandler = () => {
    this.setState({ showSideDrower: false });
  };

  sideDrawerToggleHandler = () => {
    this.setState(prevState => {
      return { showSideDrower: !prevState.showSideDrower };
    });
  };

  render() {
    let { children } = this.props;
    return (
      <Aux>
        <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler} />
        <SideDrawer
          open={this.state.showSideDrower}
          closed={this.sideDrawerClosedHandler}
        />
        <div>Toobar, SideDrawer, Backdrop</div>
        <main className={classes.Content}>{children}</main>
      </Aux>
    );
  }
}

export default Layout;