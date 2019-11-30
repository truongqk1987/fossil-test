import React from 'react';
import injectSheet from 'react-jss';

const stylesheet = {
  Phone: {
    textDecoration: 'none',
    '&>i': {
      fontSize: '1.5rem',
      color: 'white',
      marginRight: '0.5rem'
    },
    '&>span': { color: 'white'}
  }
}

const Phone = ({classes}) => 
  <a href="tel:028 3826 8160" className={classes.Phone}>
    <i className="fa fa-phone"></i>
    <span>028 3826 8160</span>
  </a>;

export default injectSheet(stylesheet)(Phone);