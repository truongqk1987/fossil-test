import React from 'react';
import injectSheet from 'react-jss';

const stylesheet = {
  Summary: {
    padding: '0.5rem 0',
    '&>.totalOrders': {
      fontWeight: 'bold',
      color: 'green',
    }
  }
}

const Summary = ({classes}) => 
  <div className={classes.Summary}>
    You have <span className="totalOrders">101</span> orders, waiting for your confirm
  </div>;

export default injectSheet(stylesheet)(Summary);