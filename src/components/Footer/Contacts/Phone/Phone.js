import React from 'react';
import injectSheet from 'react-jss';

import { contactStyle } from 'styles/layout';

const stylesheet = {
  Phone: {
    ...contactStyle(),
  }
}

const Phone = ({classes}) => 
  <a href="tel:028 3826 8160" className={classes.Phone}>
    <i className="fa fa-phone"></i>
    <span>028 3826 8160</span>
  </a>;

export default injectSheet(stylesheet)(Phone);