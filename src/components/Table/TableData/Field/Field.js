import React from 'react';
import injectSheet from 'react-jss';

const stylesheet = {
  Field: {
    padding: '1rem',
    textAlign: 'center',
  }
}

const Field = ({classes, value, renderer}) => 
  <td className={classes.Field}>{ renderer ? renderer(value) : value}</td>
  

export default injectSheet(stylesheet)(Field);