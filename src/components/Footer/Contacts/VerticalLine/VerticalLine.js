import React from 'react';
import injectSheet from 'react-jss';

const stylesheet = {
  VerticalLine: {
    borderLeft: '1px solid white',
    height: '1rem',
    margin: '0 1rem'
  }
}

const VerticalLine = ({classes}) => 
  <div className={classes.VerticalLine}>
  </div>;

export default injectSheet(stylesheet)(VerticalLine);