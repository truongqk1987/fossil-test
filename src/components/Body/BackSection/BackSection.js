import React from 'react';
import injectSheet from 'react-jss';

const stylesheet = {
  BackSection: {
    padding: '0.5rem 0',
    display: 'flex',
    '&>.container': {
      minWidth: '20%',
      display: 'flex',
      justifyContent: 'flex-end',
      '&>span': {
        minWidth: '50%',
        cursor: 'pointer',
      }
    },
    '& i': { marginRight: '0.5rem'}
  }
}

const BackSection = ({classes}) => 
  <div className={classes.BackSection}>
      <div className="container">
      <span><i className="fa fa-angle-left"></i>back</span>
      </div>
  </div>;

export default injectSheet(stylesheet)(BackSection);