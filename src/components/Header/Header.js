import React from 'react';
import injectSheet from 'react-jss';

import FluidContainer from 'components/FluidContainer';
import {flexCenter} from 'styles/layout';

import BrandLogo from './BrandLogo';
import MenuList from './MenuList';
import UserInfo from './UserInfo';

const stylesheet = theme => ({
    Header: {
        background: theme.header.background,
        ...flexCenter(),
        fontFamily: theme.flatUIFont,
        padding: '0 1rem',
    }
})

const Header = ({ classes }) =>
    <header className={classes.Header}>
        <FluidContainer>
            <BrandLogo></BrandLogo>
            <MenuList></MenuList>
            <UserInfo></UserInfo>
        </FluidContainer>
    </header>



export default injectSheet(stylesheet)(Header);