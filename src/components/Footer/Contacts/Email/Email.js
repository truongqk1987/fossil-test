import React from 'react';
import injectSheet from 'react-jss';

const stylesheet = {
  Email: {
    '&>i': {
      fontSize: '1.5rem',
      color: 'white',
      marginRight: '0.5rem'
    }
  }
}

const Email = ({classes}) => 
  <div className={classes.Email}>
    <i class="fa fa-envelope-o"></i>
    <span>phuong@fossil.com</span>
  </div>;

export default injectSheet(stylesheet)(Email);