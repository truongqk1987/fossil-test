import React from 'react';
import injectSheet from 'react-jss';

const stylesheet = {
  CompanyName: {
    textAlign: 'center',
    color: 'white',
    padding: '1rem 0',
  }
}

const CompanyName = ({classes}) => 
  <div className={classes.CompanyName}>
    <span>&copy;&nbsp;</span>
    <span>Công Ty TNHH Fossil Việt Nam</span>
  </div>;

export default injectSheet(stylesheet)(CompanyName);