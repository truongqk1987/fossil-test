import React from 'react';
import injectSheet from 'react-jss';

import MenuItem from './MenuItem';

const stylesheet = {
  Sidebar: {
    background: '#F2F2F2',
    padding: '1rem 0',
    display: 'flex',
    justifyContent: 'flex-end',
    minWidth: '10rem',
    '&>.menuList': {
      margin: 0,
      minWidth: '80%',
    }
  }
}

const items = [
  {
    id: 1,
    label: 'CONFIRM',
    url: '/confirm',
    active: true,
  }, {
    id: 2,
    label: 'PROCESS',
    url: '/process',
  }, {
    id: 3,
    label: 'WAITING',
    url: '/waiting',
  }, {
    id: 4,
    label: 'PAYMENT',
    url: '/payment',
  }, {
    id: 5,
    label: 'SUCCESS',
    url: '/success',
  }
]

const Sidebar = ({classes}) =>
  <div className={classes.Sidebar}>
    <ul className="menuList">
      { items.map(item => <MenuItem key={item.id} {...item} />) }
    </ul>
  </div>;

export default injectSheet(stylesheet)(Sidebar);