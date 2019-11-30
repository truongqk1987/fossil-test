import React from 'react';
import injectSheet from 'react-jss';
import { Link } from 'react-router-dom';

const stylesheet = {
    MenuItem: {
        cursor: 'pointer',
        color: 'black',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '1rem',
        '&.active': {
            color: 'white',
            background: 'black',
        }
    }
}

const MenuItem = ({ classes, active, url, label }) => 
    <li className={`${classes.MenuItem} ${active && 'active'} `}>
        <Link to={url}></Link> {label}
    </li>

export default injectSheet(stylesheet)(MenuItem);