import React from 'react';
import injectSheet from 'react-jss';

import Menu from './Menu';

const stylesheet = {
    MenuList: {
        margin: 0,
        padding: 0,
        flexGrow: 1,
        display: 'flex',
    }
}

const items = [
    {
        id: 1,
        label: 'HOME',
        url: '/home',
        active: false,
    },
    {
        id: 2,
        label: 'ORDER',
        url: '/order',
        active: true,
    },
    {
        id: 3,
        label: 'WAREHOUSE',
        url: '/warehouse',
        active: false,
    },
    {
        id: 4,
        label: 'CUSTOMER',
        url: '/customer',
        active: false,
    },
    {
        id: 5,
        label: 'SYSTEM',
        url: '/system',
        active: false,
    },
    {
        id: 6,
        label: 'NOTIFICATION',
        url: '/notification',
        active: false,
    },
]

const MenuList = ({ classes }) => 
    <ul className={classes.MenuList}>
        { items.map(item => <Menu key={item.id} {...item} />
            )}
    </ul>

export default injectSheet(stylesheet)(MenuList);