import React from 'react';
import injectSheet from 'react-jss';

import Contacts from './Contacts';
import CompanyName from './CompanyName';


const stylesheet = {
  Footer: {
    background: '#1e1e1e',
    fontFamily: "sans-serif",
    display: 'flex',
    flexDirection: 'column',
    '&>hr': {
      background: '#F2F2F2',
      margin: '0.5rem 0',
      width: '100%',
    }
  }
}

const Footer = ({classes}) => 
  <footer className={classes.Footer}>
    <Contacts />
    <hr />
    <CompanyName />
  </footer>


export default injectSheet(stylesheet)(Footer);