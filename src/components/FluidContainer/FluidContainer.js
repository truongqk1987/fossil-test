import React from 'react';
import injectSheet from 'react-jss';

const stylesheet = {
    FluidContainer: {
        display: 'flex',
        minWidth: '960px',
        maxWidth: '1280px',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: props => props.flexColumn ? 'column': 'row',
    }
}

const FluidContainer = ({ classes, children }) => <div className={classes.FluidContainer}>
    {children}
</div>
export default injectSheet(stylesheet)(FluidContainer);