import React from 'react';
import injectSheet from 'react-jss';

import Status from './Status';
import fakeStatues from './fakeStatues';

const stylesheet = theme => ({
  StatusSidebar: {
    background: theme.pages.order.sidebarBackground,
    display: 'flex',
    justifyContent: 'flex-end',
    minWidth: theme.pages.order.minWidthSidebar,
    '&>.menuList': {
      maxWidth: theme.pages.order.maxWidthSidebarItem,
      width: '100%',
      padding: 0,
      margin: '1rem 0',
    }
  }
})

const StatusSidebar = ({classes}) =>
  <div className={classes.StatusSidebar}>
    <ul className="menuList">
      { fakeStatues.map(status => <Status key={status.id} {...status} />) }
    </ul>
  </div>;

export default injectSheet(stylesheet)(StatusSidebar);