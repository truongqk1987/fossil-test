import React from 'react';
import injectSheet from 'react-jss';
import { Link } from 'react-router-dom';

const stylesheet = {
    Menu: {
        cursor: 'pointer',
        color: 'white',
        flexGrow: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        '&.active': {
            fontWeight: 'bold',
            textDecoration: 'underline',
        }
    }
}

const Menu = ({ classes, active, url, label }) => 
    <li className={`${classes.Menu} ${active && 'active'} `}>
        <Link to={url}></Link> {label}
    </li>

export default injectSheet(stylesheet)(Menu);