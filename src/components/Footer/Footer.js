import React from 'react';
import injectSheet from 'react-jss';

import {flexCenter} from 'styles/layout'

import Contacts from './Contacts';
import CompanyName from './CompanyName';


const stylesheet = theme => ({
  Footer: {
    background: theme.footer.background,
    ...flexCenter('column'), 
    '&>hr': {
      margin: '0.5rem 0',
      width: '100%',
    }
  }
})

const Footer = ({classes}) => 
  <footer className={classes.Footer}>
    <Contacts />
    <hr />
    <CompanyName />
  </footer>


export default injectSheet(stylesheet)(Footer);