import React from 'react';
import injectSheet from 'react-jss';

const stylesheet = { 
  TotalField: {
    fontWeight: 'bold'
  }
}

const TotalField = ({ classes, total }) =>
  <span className={classes.TotalField}>
    {total}
  </span>

const StyledTotalField = injectSheet(stylesheet)(TotalField);

const renderTotalField = (total) => <StyledTotalField total={total}/>

export default renderTotalField;