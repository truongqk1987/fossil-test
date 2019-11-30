import React from 'react';
import injectSheet from 'react-jss';

import { resetTableStyle } from 'styles/layout';

import TableHeader from './TableHeader';
import TableData from './TableData';

const stylesheet = {
  Table: {
    ...resetTableStyle(),
  }
}

const Table = ({classes, header, datas, customizeRenders, idField}) => {
  const dataKeys = Object.keys(header);
  const labels = Object.values(header);
  return <table className={classes.Table}>
          <TableHeader labels={labels}></TableHeader>
          <TableData idField={idField} customizeRenders={customizeRenders}
            datas={datas} dataKeys={dataKeys}></TableData>
        </table>
}

export default injectSheet(stylesheet)(Table);