import React from 'react';
import injectSheet from 'react-jss';

import Contacts from './Contacts';
import CompanyName from './CompanyName';

const stylesheet = {
  Footer: {
    background: '#1e1e1e',
    fontFamily: "sans-serif",
    '&>hr': {
      background: '#C3C3C3',
      margin: '0.5rem 0',
    }
  }
}

const Footer = ({classes}) => 
  <footer className={classes.Footer}>
    <Contacts />
    <hr />
    <CompanyName />
  </footer>;

export default injectSheet(stylesheet)(Footer);