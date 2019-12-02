import React from 'react';
import injectSheet from 'react-jss';

import {setFlex, setFlexMaxSize} from 'styles/layout';

import Summary from './Summary';
import Orders from './Orders';
import Pagination from './Pagination';

const stylesheet = theme => ({
  ConfirmSection: {
    padding: '1rem',
    maxWidth: '48rem',
    width: '100%',
    '&>footer': {
      ...setFlex('row', 'center', 'space-between'),
      border: `1px solid ${theme.pages.order.confirmSectionBorder}`,
      borderTop: 'none',
      padding: '1.5rem 1rem',
    }
  }
});

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