/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import injectSheet from 'react-jss';
import { connect } from 'react-redux';

import {setFlex} from 'styles/layout';
import ORDER_LIST from 'globalConstants/fakeOrderList';
import { OrderListActionCreator } from 'actions';
import { orderListSelector, waitingOrdersSelector, totalOrdersSelector} from 'reducers/orderReducer';

import Summary from './Summary';
import Orders from './Orders';
import Pagination from './Pagination';

const stylesheet = theme => ({
  ConfirmSection: {
    padding: '1rem',
    maxWidth: '48rem',
    width: '100%',
    '&>footer': {
      ...setFlex('row', 'center', 'space-between'),
      border: `1px solid ${theme.pages.order.confirmSectionBorder}`,
      borderTop: 'none',
      padding: '1.5rem 1rem',
    }
  }
});

const ConfirmSection = ({classes, orderList, waitingOrders, totalOrders, dispatch}) => {

  useEffect(() => {
    const orderListPromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          waitingOrders: '101',
          orderList: ORDER_LIST,
          totalOrders: 1200,
        })
      }, 500);
    })
    orderListPromise.then((payload) => {
      dispatch(OrderListActionCreator.getOrderListSuccess(payload))
    }).catch((error) => {
      dispatch(OrderListActionCreator.getOrderListError(error))
    })
  }, [])

  return (
    orderList.length > 0 &&
      <div className={classes.ConfirmSection}>
        <Summary waitingOrders={waitingOrders}/>
        <Orders orderList={orderList}/>
        <footer>
          <div>You have: {totalOrders} orders</div>
          <Pagination />
        </footer>
      </div>
  );
}

const mapStateToProps = (state) => ({
  orderList: orderListSelector(state),
  waitingOrders: waitingOrdersSelector(state),
  totalOrders: totalOrdersSelector(state),
});

const mapDispatchToProps = dispatch => ({ dispatch })

export default connect(mapStateToProps, mapDispatchToProps)(injectSheet(stylesheet)(ConfirmSection));