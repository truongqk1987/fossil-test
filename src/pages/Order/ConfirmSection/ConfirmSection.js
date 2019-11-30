import React from 'react';
import injectSheet from 'react-jss';

import Summary from './Summary';
import Orders from './Orders';
import Pagination from './Pagination';

const stylesheet = {
  ConfirmSection: {
    padding: '1rem',
    flexGrow: '1',
    '&>footer': {
      display: 'flex',
      justifyContent: 'space-between',
      border: '1px solid #F2F2F2',
      borderTop: 'none',
      padding: '1.5rem 1rem',
    }
  }
}

const ConfirmSection = ({classes}) => 
  <div className={classes.ConfirmSection}>
    <Summary />
    <Orders />
    <footer>
      <div>You have: 1200 orders</div>
      <Pagination />
    </footer>
  </div>;

export default injectSheet(stylesheet)(ConfirmSection);