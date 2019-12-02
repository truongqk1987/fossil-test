import React from 'react';
import injectSheet from 'react-jss';
import { NavLink } from 'react-router-dom';

import {flexCenter, removeLinkStyle} from 'styles/layout';

const stylesheet = theme => ({
    Status: {
        cursor: 'pointer',
        ...flexCenter(),
        
        '&>a': {
            ...removeLinkStyle(theme.pages.order.sidebarItemTextColor),
            padding: '1rem',
            textAlign: 'center',
            width: '100%',
            '&.active': {
                color: theme.pages.order.sidebarActiveItemTextColor,
                background: theme.pages.order.sidebarActiveItemBackground,
            }
        },
        
    }
})

const Status = ({ classes, active, url, label }) => 
    <li className={classes.Status} onClick={() => { window.scrollTo(0, 0) }}>
        <NavLink exact to={url} activeClassName="active">
            {label}
        </NavLink>
    </li>

export default injectSheet(stylesheet)(Status);