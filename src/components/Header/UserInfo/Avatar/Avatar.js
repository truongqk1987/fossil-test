import React from 'react';
import injectSheet from 'react-jss';

import TempAvatar from './avatar.png';

const stylesheet = theme => ({
    Avatar: {
        ...theme.header.userAvatar,
        borderRadius: '50%',
    }
})

const Avatar = ({ classes }) => <img className={classes.Avatar} src={TempAvatar} alt="User avatar"/>

export default injectSheet(stylesheet)(Avatar);