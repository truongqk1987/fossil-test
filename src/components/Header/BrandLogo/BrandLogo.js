import React from 'react';
import injectSheet from 'react-jss'
import { NavLink } from 'react-router-dom';

import { ReactComponent as Logo }  from './brand-logo.svg';

const stylesheet = {
    BrandLogo: {
        '&>a>svg': {
            cursor: 'pointer',
        }
    }
};

const BrandLogo = ({ classes }) => 
    <div className={classes.BrandLogo}>
        <NavLink to="/"><Logo/></NavLink>
    </div>

export default injectSheet(stylesheet)(BrandLogo);