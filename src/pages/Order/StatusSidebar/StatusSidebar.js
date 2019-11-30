import React from 'react';
import injectSheet from 'react-jss';

import Status from './Status';

const stylesheet = {
  StatusSidebar: {
    background: '#F2F2F2',
    padding: '1rem 0',
    display: 'flex',
    justifyContent: 'flex-end',
    minWidth: '15rem',
    '&>.menuList': {
      margin: 0,
      minWidth: '100%',
      padding: 0,
    }
  }
}

const statuses = [
  {
    id: 1,
    label: 'CONFIRM',
    url: '/order/',
  }, {
    id: 2,
    label: 'PROCESS',
    url: '/order/process',
  }, {
    id: 3,
    label: 'WAITING',
    url: '/order/waiting',
  }, {
    id: 4,
    label: 'PAYMENT',
    url: '/order/payment',
  }, {
    id: 5,
    label: 'SUCCESS',
    url: '/order/success',
  }
]

const StatusSidebar = ({classes}) =>
  <div className={classes.StatusSidebar}>
    <ul className="menuList">
      { statuses.map(status => <Status key={status.id} {...status} />) }
    </ul>
  </div>;

export default injectSheet(stylesheet)(StatusSidebar);