import React from 'react';
import injectSheet from 'react-jss';

const stylesheet = theme => ({
    FluidContainer: {
        display: 'flex',
        maxWidth: theme.containerMaxWidth,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: props => props.flexColumn ? 'column': 'row',
    }
});

const FluidContainer = ({ classes, children }) => <div className={classes.FluidContainer}>
    {children}
</div>
export default injectSheet(stylesheet)(FluidContainer);