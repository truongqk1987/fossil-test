import React from 'react';
import injectSheet from 'react-jss';
import { NavLink } from 'react-router-dom';

const stylesheet = {
    Menu: {
        cursor: 'pointer',
        color: 'white',
        flexGrow: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        '&>a': { textDecoration: 'none', color: 'white'},
        '& .active': {
            fontWeight: 'bold',
            textDecoration: 'underline',
        }
    }
}

const Menu = ({ classes, active, url, label }) => 
    <li className={classes.Menu}>
        <NavLink to={url} activeClassName="active">{label}</NavLink> 
    </li>

export default injectSheet(stylesheet)(Menu);