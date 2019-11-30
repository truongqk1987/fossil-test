import React from 'react';
import injectSheet from 'react-jss';
import { NavLink } from 'react-router-dom';
import { flexCenter, setFlexMaxSize, removeLinkStyle } from 'styles/layout';


const stylesheet = theme => ({
    Menu: {
        cursor: 'pointer',
        color: theme.header.textColor,
        ...setFlexMaxSize(),
        ...flexCenter(),
        '&>a': { ...removeLinkStyle()},
        '& .active': {
            fontWeight: 'bold',
            textDecoration: 'underline',
        }
    }
})

const Menu = ({ classes, active, url, label }) => 
    <li className={classes.Menu}>
        <NavLink to={url} activeClassName="active">{label}</NavLink> 
    </li>

export default injectSheet(stylesheet)(Menu);