import React from 'react';
import injectSheet from 'react-jss';

const stylesheet = {
  TableHeader: {
    background: 'black',
    color: 'white',
    '&>th': { border: 'none', padding: '1rem'}
  }
}

const TableHeader = ({classes, labels}) =>
  <thead>
    <tr className={classes.TableHeader}>
      {labels.map((label, index) => <th key={index}>{label}</th>)}
    </tr>
  </thead>

export default injectSheet(stylesheet)(TableHeader);