import React from 'react';
import injectSheet from 'react-jss';

import Title from './Title';
import BackSection from './BackSection';

const styleSheet = {
  Body: {
    '&>hr': { margin: 0 },
  }
};

const Body = ({classes, children}) =>
  <section className={classes.Body}>
    <Title />
    <hr />
    <BackSection />
    <hr />
      
    {children}
  </section>;

export default injectSheet(styleSheet)(Body);