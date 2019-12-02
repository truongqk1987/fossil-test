import React from 'react';
import injectSheet from 'react-jss';

import Status from './Status';
import fakeStatues from './fakeStatues';

const calcMaxWidthOfSidebar = ({ maxWidthSidebarItem}, {containerMaxWidth}) => 
  `calc(((100% - ${containerMaxWidth})/2) + ${maxWidthSidebarItem})`

const stylesheet = theme => ({
  StatusSidebar: {
    background: theme.pages.order.sidebarBackground,
    display: 'flex',
    justifyContent: 'flex-end',
    maxWidth: calcMaxWidthOfSidebar(theme.pages.order, theme),
    width: '100%',
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