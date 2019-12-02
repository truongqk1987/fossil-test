import React from 'react';
import injectSheet from 'react-jss';

import Table from 'components/Table';

import { renderCustomerField, renderTotalField } from './utils';


const stylesheet = {
  Orders: {
  }
}

const header = {
  customer: 'Name', 
  quantity: 'Quantity', 
  dateOrder: 'Date order',
  orderID: 'Order ID',
  total: 'Total' 
};

const Orders = ({classes, orderList}) =>
  <div className={classes.Orders}>
    <Table idField="id" header={header} datas={orderList} customizeRenders={{
      customer: renderCustomerField,
      total: renderTotalField,
    }} />
  </div>;

export default injectSheet(stylesheet)(Orders);