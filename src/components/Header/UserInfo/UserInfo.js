
import React from 'react';
import injectSheet from 'react-jss';

import { flexCenter } from 'styles/layout';

import Avatar from './Avatar';

const stylesheet = theme => ({
    UserInfo: {
        background: theme.header.userInfo.background,
        color: theme.header.userInfo.textColor,
        padding: '1rem',
        cursor: 'pointer',
        ...flexCenter(),
    }
})

const UserInfo = ({ classes }) => 
    <div className={classes.UserInfo}>
        <Avatar />
        <span>Kanlee</span>
    </div>

export default injectSheet(stylesheet)(UserInfo);