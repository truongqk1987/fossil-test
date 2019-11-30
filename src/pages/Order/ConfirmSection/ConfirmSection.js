import React from 'react';
import injectSheet from 'react-jss';

import Summary from './Summary';
import Orders from './Orders';

const stylesheet = {
  ConfirmSection: {
    padding: '1rem',
    flexGrow: '1',
  }
}

const ConfirmSection = ({classes}) => 
  <div className={classes.ConfirmSection}>
    <Summary />
    <Orders />
  </div>;

export default injectSheet(stylesheet)(ConfirmSection);