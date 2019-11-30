import React from 'react';
import injectSheet from 'react-jss';

const stylesheet = {
    Pagination: {
        '&>a': {
            textDecoration: 'none',
            padding: '0.5rem',
            color: 'black',
            cursor: 'pointer',
        },
        '&>a.active>span': {
            borderRadius: '50%',
            padding: '0.25rem 0.35rem',
            background: 'black',
            color: 'white',
        }
    }
}

const Pagination = ({ classes }) =>
    <div className={classes.Pagination}>
        <a href="javascrip:void(0)">First</a>
        <a href="javascrip:void(0)">01</a>
        <a className="active" href="javascrip:void(0)"><span>02</span></a>
        <a href="javascrip:void(0)">03</a>
        <a href="javascrip:void(0)">04</a>
        <a href="javascrip:void(0)">...</a>
        <a href="javascrip:void(0)">12</a>
        <a href="javascrip:void(0)">Last</a>
    </div>

export default injectSheet(stylesheet)(Pagination);