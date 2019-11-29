import React from 'react';
import injectSheet from 'react-jss';

import Contacts from './Contacts';
import CompanyName from './CompanyName';

const stylesheet = {
  Footer: {
    background: '#1e1e1e',
    fontFamily: "sans-serif",
  }
}

const Footer = ({classes}) => 
  <div className={classes.Footer}>
    <Contacts />
    <hr />
    <CompanyName />
  </div>;

export default injectSheet(stylesheet)(Footer);