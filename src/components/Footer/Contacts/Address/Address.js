import React from 'react';
import injectSheet from 'react-jss';

const stylesheet = {
  Address: {
    textDecoration: 'none',
    '&>i': {
      fontSize: '1.5rem',
      color: 'white',
      marginRight: '0.5rem'
    },
    '&>span': { color: 'white'}
  }
}

const Address = ({classes}) => 
  <a href="http://maps.google.com/?q=384 Hoàng Diệu, Phường 6, Quận 4, Hồ Chí Minh" className={classes.Address}>
    <i className="fa fa-map-marker"></i>
    <span>384 Hoàng Diệu, Phường 6, Quận 4, Hồ Chí Minh</span>
  </a>;

export default injectSheet(stylesheet)(Address);