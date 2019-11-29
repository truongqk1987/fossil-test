
import React from 'react';
import injectSheet from 'react-jss';

import Avatar from './Avatar';

const stylesheet = {
    UserInfo: {
        background: '#252524',
        color: 'white',
        padding: '1rem',
        cursor: 'pointer',
    }
}

const UserInfo = ({ classes }) => 
    <div className={classes.UserInfo}>
        <Avatar />
        <span>Kanlee</span>
    </div>

export default injectSheet(stylesheet)(UserInfo);