import React from 'react';
import injectSheet from 'react-jss';
import { NavLink } from 'react-router-dom';

const stylesheet = {
    Status: {
        cursor: 'pointer',
        color: 'black',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textDecoration: 'none',
        '&>a': {
            textDecoration: 'none',
            padding: '1rem',
            textAlign: 'center',
            width: '100%',
        },
        '& .active': {
            color: 'white',
            background: 'black',
        }
    }
}

const Status = ({ classes, active, url, label }) => 
    <li className={classes.Status}>
        <NavLink exact to={url} activeClassName="active">{label}</NavLink>
    </li>

export default injectSheet(stylesheet)(Status);