import React from 'react';
import injectSheet from 'react-jss';

import { resetSpace, setMaxChildFlexLayout } from 'styles/layout';
import { HEADER_MENU_ITEMS } from 'globalConstants';

import Menu from './Menu';


const stylesheet = {
    MenuList: {
        ...resetSpace(),
        ...setMaxChildFlexLayout(),
    }
}

const MenuList = ({ classes }) => 
    <ul className={classes.MenuList}>
        { HEADER_MENU_ITEMS.map(item => <Menu key={item.id} {...item} />
            )}
    </ul>

export default injectSheet(stylesheet)(MenuList);