import React from 'react';
import injectSheet from 'react-jss';

const stylesheet = {
  Email: {
    textDecoration: 'none',
    '&>i': {
      fontSize: '1.5rem',
      color: 'white',
      marginRight: '0.5rem'
    },
    '&>span': { color: 'white'}
  }
}

const Email = ({classes}) => 
  <a href="mailTo:phuong@fossil.com" className={classes.Email}>
    <i className="fa fa-envelope-o"></i>
    <span>phuong@fossil.com</span>
  </a>;

export default injectSheet(stylesheet)(Email);