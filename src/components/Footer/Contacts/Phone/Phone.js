import React from 'react';
import injectSheet from 'react-jss';

import { contactStyle } from 'styles/layout';
import { COMPANY_PHONE } from 'globalConstants';

const stylesheet = {
  Phone: {
    ...contactStyle(),
  }
}

const Phone = ({classes}) => 
  <a href={`tel:${COMPANY_PHONE}`} className={classes.Phone}>
    <i className="fa fa-phone"></i>
    <span>{COMPANY_PHONE}</span>
  </a>;

export default injectSheet(stylesheet)(Phone);