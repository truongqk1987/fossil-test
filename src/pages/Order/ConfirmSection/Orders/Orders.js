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

const datas = [
  {
    id: 1,
    customer: {
      name: 'Nguyễn Thị Thanh Thúy',
      level: 'Lv1',
    },
    quantity: '124',
    dateOrder: '18.05.2019',
    orderID: '158680083786',
    total: '35.000.000'
  },
  {
    id: 2,
    customer: {
      name: 'Nguyễn Minh Tường',
      level: 'Lv1',
    },
    quantity: '124',
    dateOrder: '18.05.2019',
    orderID: '158680083786',
    total: '90.000.000'
  },
  {
    id: 3,
    customer: {
      name: 'Lê Nguyễn Minh Khánh',
      level: 'Lv1',
    },
    quantity: '124',
    dateOrder: '18.05.2019',
    orderID: '158680083786',
    total: '90.000.000'
  },
  {
    id: 4,
    customer: {
      name: 'Nguyễn Thị Thanh Thúy',
      level: 'Lv1',
    },
    quantity: '124',
    dateOrder: '18.05.2019',
    orderID: '158680083786',
    total: '35.000.000'
  },
  {
    id: 5,
    customer: {
      name: 'Nguyễn Thị Thanh Thúy',
      level: 'Lv1',
    },
    quantity: '124',
    dateOrder: '18.05.2019',
    orderID: '158680083786',
    total: '35.000.000'
  },
  {
    id: 6,
    customer: {
      name: 'Nguyễn Thị Thanh Thúy',
      level: 'Lv1',
    },
    quantity: '124',
    dateOrder: '18.05.2019',
    orderID: '158680083786',
    total: '35.000.000'
  },
  {
    id: 7,
    customer: {
      name: 'Nguyễn Thị Thanh Thúy',
      level: 'Lv1',
    },
    quantity: '124',
    dateOrder: '18.05.2019',
    orderID: '158680083786',
    total: '35.000.000'
  },
  {
    id: 8,
    customer: {
      name: 'Nguyễn Thị Thanh Thúy',
      level: 'Lv1',
    },
    quantity: '124',
    dateOrder: '18.05.2019',
    orderID: '158680083786',
    total: '35.000.000'
  },
  {
    id: 9,
    customer: {
      name: 'Nguyễn Thị Thanh Thúy',
      level: 'Lv1',
    },
    quantity: '124',
    dateOrder: '18.05.2019',
    orderID: '158680083786',
    total: '35.000.000'
  },
  {
    id: 10,
    customer: {
      name: 'Nguyễn Thị Thanh Thúy',
      level: 'Lv1',
    },
    quantity: '124',
    dateOrder: '18.05.2019',
    orderID: '158680083786',
    total: '35.000.000'
  }
]

const Orders = ({classes}) => 
  <div className={classes.Orders}>
    <Table idField="id" header={header} datas={datas} customizeRenders={{
      customer: renderCustomerField,
      total: renderTotalField,
    }} />
  </div>;

export default injectSheet(stylesheet)(Orders);