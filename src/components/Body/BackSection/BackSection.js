import React from 'react';
import injectSheet from 'react-jss';

const stylesheet = {
  BackSection: {
    padding: '0.5rem 0',
    '&>i': { marginRight: '0.5rem'}
  }
}

const BackSection = ({classes}) => 
  <div className={classes.BackSection}>
    <i className="fa fa-angle-left"></i>
    <span>Back</span>
  </div>;

export default injectSheet(stylesheet)(BackSection);