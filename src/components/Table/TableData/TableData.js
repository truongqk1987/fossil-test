import React from 'react';
import injectSheet from 'react-jss';

import Field from './Field';

const stylesheet = theme => ({
  TableData: {
    border: `1px solid ${theme.table.row.border}`,
    borderTop: 'none',
    '&:hover': {
      background: theme.table.row.hoverBackground,
    }
  }
});

const TableData = ({ idField, classes, datas, dataKeys, customizeRenders}) => 
<tbody>
  {
    datas.map(data =>
      <tr key={data[idField]} className={classes.TableData}>
        { 
          dataKeys.map((key, index) =>
              <Field key={`${data[idField]}${index}`} value={data[key]} renderer={customizeRenders[key]}/>)
        }
      </tr>
    )
  }
</tbody>;
  

export default injectSheet(stylesheet)(TableData);