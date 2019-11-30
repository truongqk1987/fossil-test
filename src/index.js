import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import {ThemeProvider} from 'react-jss'

import App from 'containers/App';
import theme from 'styles';


ReactDOM.render(
    <BrowserRouter>
        <ThemeProvider theme={theme}><App/></ThemeProvider>
    </BrowserRouter>
    , document.getElementById('root'));
