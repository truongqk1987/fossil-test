import React from 'react';
import injectSheet from 'react-jss';

import Table from 'components/Table';


const stylesheet = {
  Orders: {
  }
}

const headers = [
  { customer: 'Name' },
  { quantity: 'Quantity' },
  { dateOrder: 'Date order' },
  { orderID: 'Order ID' },
  { total: 'Total' },
]

const datas = [
  {
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
    <Table headers={headers} datas={datas} />
  </div>;

export default injectSheet(stylesheet)(Orders);