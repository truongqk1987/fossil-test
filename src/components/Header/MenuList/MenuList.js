import React from 'react';
import injectSheet from 'react-jss';

import { resetSpace, setMaxChildFlexLayout } from 'styles/layout';

import Menu from './Menu';
import fakeMenuItems from './fakeMenuItems';

const stylesheet = {
    MenuList: {
        ...resetSpace(),
        ...setMaxChildFlexLayout(),
    }
}

const MenuList = ({ classes }) => 
    <ul className={classes.MenuList}>
        { fakeMenuItems.map(item => <Menu key={item.id} {...item} />
            )}
    </ul>

export default injectSheet(stylesheet)(MenuList);