import React from 'react';
import injectSheet from 'react-jss';

import {
  Switch,
  Route,
} from "react-router-dom";

import ConfirmSection from './ConfirmSection';
import StatusSidebar from './StatusSidebar';

const stylesheet = {
  Order: {
    display: 'flex',
  }
}

const Order = ({classes}) => 
  <div className={classes.Order}>
    <StatusSidebar/>
    <Switch>
      <Route exact path="/order">
        <ConfirmSection/>
      </Route>
    </Switch>
  </div>;

export default injectSheet(stylesheet)(Order);