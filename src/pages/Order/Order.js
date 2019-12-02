import React from 'react';
import injectSheet from 'react-jss';

import {
  Switch,
  Route,
} from "react-router-dom";

import { setFlex } from 'styles/layout';

import ConfirmSection from './ConfirmSection';
import StatusSidebar from './StatusSidebar';

const stylesheet = {
  Order: {
    ...setFlex('row', 'stretch', 'flex-start'),
    height: '100%',
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