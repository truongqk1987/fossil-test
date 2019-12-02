import React from 'react';
import injectSheet from 'react-jss';
import { withRouter } from 'react-router-dom';

import {flexCenter, setFlex} from 'styles/layout'

const stylesheet = theme => ({
  BackSection: {
    padding: '0.5rem 0',
    ...flexCenter(),
    '&>.container': {
      maxWidth: theme.maxWidthOfPageTitle,
      width: '100%',
      ...setFlex('column', 'flex-start', 'center' ),
      '&>span': {
        cursor: 'pointer',
        '&>i': { marginRight: '0.5rem'}
      }
    },
    
  }
});

const BackSection = ({classes, history}) => 
  <div className={classes.BackSection}>
      <div className="container">
      <span onClick={history.goBack}><i className="fa fa-angle-left"></i>back</span>
      </div>
  </div>;

export default injectSheet(stylesheet)(withRouter(BackSection));