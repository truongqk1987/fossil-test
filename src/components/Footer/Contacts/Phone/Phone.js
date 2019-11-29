import React from 'react';
import injectSheet from 'react-jss';

const stylesheet = {
  Phone: {
    '&>i': {
      fontSize: '1.5rem',
      color: 'white',
      marginRight: '0.5rem'
    }
  }
}

const Phone = ({classes}) => 
  <div className={classes.Phone}>
    <i class="fa fa-phone"></i>
    <span>028 3826 8160</span>
  </div>;

export default injectSheet(stylesheet)(Phone);