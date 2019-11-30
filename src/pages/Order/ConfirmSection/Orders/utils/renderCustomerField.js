import React from 'react';
import injectSheet from 'react-jss';

const stylesheet = { 
  CustomerField: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    '&>.name': { fontWeight: 'bold' },
    '&>.level': {
      background: '#F2F2F2',
      borderRadius: '0.75rem',
      minWidth: '8rem',
      marginTop: '0.25rem',
      padding: '0.25rem 0',
    }
  }
}

const CustomerField = ({ classes, name, level }) =>
  <div className={classes.CustomerField}>
    <div className="name">{name}</div>
    <div className="level">{level}</div>
  </div>

const StyledCustomerField = injectSheet(stylesheet)(CustomerField);

const renderCustomerField = (customer) => <StyledCustomerField {...customer}/>

export default renderCustomerField;