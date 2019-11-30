import React from 'react';
import injectSheet from 'react-jss';

import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';

const stylsheet = {
  App: {}
}

const App = () => <>
  <Header></Header>
  <Body></Body>
  <Footer></Footer>
</>

export default injectSheet(stylsheet)(App);
