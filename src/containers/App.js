/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import injectSheet from 'react-jss';
import {
  Switch,
  Route,
  withRouter,
} from "react-router-dom";

import Header from 'components/Header';
import Body from 'components/Body';
import Footer from 'components/Footer';

import {flexCenter} from 'styles/layout';

import Order from 'pages/Order';

const stylsheet = {
  App: { ...flexCenter('column') }
}

const App = ({ history }) => {
  useEffect(() => {
    history.push('/order');
  }, []);

  return <>
    <Header></Header>
    <Body>
      <Switch>
        <Route path="/">
          <Order />
        </Route>
        <Route path="/order">
          <Order />
        </Route>
      </Switch>
    </Body>
    <Footer></Footer>
  </>
}

export default injectSheet(stylsheet)(withRouter(App));
