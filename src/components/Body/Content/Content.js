import React from 'react';
import injectSheet from 'react-jss';

const stylesheet = {
  Content: {
  }
}

const Content = ({classes}) => 
  <div className={classes.Content}>
  </div>;

export default injectSheet(stylesheet)(Content);