import React from 'react';
import injectSheet from 'react-jss';

import TempAvatar from './avatar.png';

const stylesheet = {
    Avatar: {
        verticalAlign: 'middle',
        width: '2rem',
        height: '2rem',
        borderRadius: '50%',
        padding: '0 0.5rem',
    }
}

const Avatar = ({ classes }) => <img className={classes.Avatar} src={TempAvatar} alt="User avatar"/>

export default injectSheet(stylesheet)(Avatar);