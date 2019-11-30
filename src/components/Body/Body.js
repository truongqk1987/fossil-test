import React from 'react';
import injectSheet from 'react-jss';

import Title from './Title';
import BackSection from './BackSection';
import Sidebar from './Sidebar';
import Content from './Content';

const styleSheet = {
  Body: {
    '&>hr': { margin: 0 },
    '&>div.mainPart': {
      display: 'flex',
    }
  }
};

const Body = ({classes}) =>
  <section className={classes.Body}>
    <Title />
    <hr />
    <BackSection />
    <hr />
    <div className="mainPart">
    <Sidebar />
      
    <Content/>
    </div>
  </section>;

export default injectSheet(styleSheet)(Body);