import React from 'react';
import injectSheet from 'react-jss';

import { contactStyle } from 'styles/layout';

const stylesheet = {
  Email: {
    ...contactStyle(),
  }
}

const Email = ({classes}) => 
  <a href="mailTo:phuong@fossil.com" className={classes.Email}>
    <i className="fa fa-envelope-o"></i>
    <span>phuong@fossil.com</span>
  </a>;

export default injectSheet(stylesheet)(Email);