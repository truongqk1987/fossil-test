import React from 'react';
import injectSheet from 'react-jss';

const stylesheet = theme => ({
  TableHeader: {
    background: theme.table.header.background,
    color: theme.table.header.textColor,
    '&>th': { border: 'none', padding: '1rem'}
  }
})

const TableHeader = ({classes, labels}) =>
  <thead>
    <tr className={classes.TableHeader}>
      {labels.map((label, index) => <th key={index}>{label}</th>)}
    </tr>
  </thead>

export default injectSheet(stylesheet)(TableHeader);