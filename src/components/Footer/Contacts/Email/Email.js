import React from 'react';
import injectSheet from 'react-jss';

import { contactStyle } from 'styles/layout';
import { COMPANY_EMAIL } from 'globalConstants';

const stylesheet = {
  Email: {
    ...contactStyle(),
  }
}

const Email = ({classes}) => 
  <a href={`mailTo:${COMPANY_EMAIL}`} className={classes.Email}>
    <i className="fa fa-envelope-o"></i>
    <span>{COMPANY_EMAIL}</span>
  </a>;

export default injectSheet(stylesheet)(Email);