import React from 'react';
import injectSheet from 'react-jss';

import FluidContainer from 'components/FluidContainer';

import BrandLogo from './BrandLogo';
import MenuList from './MenuList';
import UserInfo from './UserInfo';

const stylesheet = {
    Header: {
        background: '#1e1e1e',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: "'Lato', sans-serif",
        padding: '0 1rem',
    }
}

const Header = ({ classes }) =>
    <header className={classes.Header}>
        <FluidContainer>
            <BrandLogo></BrandLogo>
            <MenuList></MenuList>
            <UserInfo></UserInfo>
        </FluidContainer>
    </header>



export default injectSheet(stylesheet)(Header);