import React from 'react';
import injectSheet from 'react-jss'

import { ReactComponent as Logo }  from './brand-logo.svg';

const stylesheet = { BrandLogo: {}};

const BrandLogo = ({ classes }) => 
    <div className={classes.BrandLogo}>
        <Logo/>
    </div>

export default injectSheet(stylesheet)(BrandLogo);