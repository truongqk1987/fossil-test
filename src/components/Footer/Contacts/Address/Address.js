import React from 'react';
import injectSheet from 'react-jss';

import {contactStyle} from 'styles/layout';
import { COMPANY_ADDRESS, COMPANY_ADDRESS_URL } from 'globalConstants';

const stylesheet = {
  Address: {
    ...contactStyle(),
  }
}

const Address = ({classes}) => 
  <a href={COMPANY_ADDRESS_URL} className={classes.Address}>
    <i className="fa fa-map-marker"></i>
    <span>{COMPANY_ADDRESS}</span>
  </a>;

export default injectSheet(stylesheet)(Address);