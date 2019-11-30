import React from 'react';
import injectSheet from 'react-jss';

const stylesheet = {
  Title: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '1rem',
    '&>div:first-child': {
      padding: '0 0 0.5rem 0',
      fontWeight: 'bold',
      fontSize: '2.25rem',
    }
  }
}

const Title = ({classes}) => 
  <div className={classes.Title}>
    <div>List of order</div>
    <div>Orders information & payment</div>
  </div>;

export default injectSheet(stylesheet)(Title);