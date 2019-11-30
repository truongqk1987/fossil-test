import React from 'react';
import injectSheet from 'react-jss';

const stylesheet = {
  Address: {
    '&>i': {
      fontSize: '1.5rem',
      color: 'white',
      marginRight: '0.5rem'
    }
  }
}

const Address = ({classes}) => 
  <div className={classes.Address}>
    <i className="fa fa-map-marker"></i>
    <span>384 Hoàng Diệu, Phường 6, Quận 4, Hồ Chí Minh</span>
  </div>;

export default injectSheet(stylesheet)(Address);