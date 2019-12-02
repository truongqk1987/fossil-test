import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import {ThemeProvider} from 'react-jss'
import { Provider } from 'react-redux'

import App from 'containers/App';
import theme from 'styles';
import store from 'store';


ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <ThemeProvider theme={theme}><App/></ThemeProvider>
        </Provider>
    </BrowserRouter>
    , document.getElementById('root'));
