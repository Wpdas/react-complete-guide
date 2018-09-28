import React from 'react';

import Aux from '../../hoc/Aux';
import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

const Layout = ({ children }) => (
  <Aux>
    <Toolbar />
    <SideDrawer />
    <div>Toobar, SideDrawer, Backdrop</div>
    <main className={classes.Content}>{children}</main>
  </Aux>
);

export default Layout;
