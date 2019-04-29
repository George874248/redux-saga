// react
import * as React from 'react';
import { render } from 'react-dom';

// redux
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import reducer from './packages/base/redux-saga/reducers/add'

// components
import Main from './packages/base/redux-saga/components/main';

const store = createStore(reducer) ;

render(
    <Provider store={store}>
        <Main name='Goshan' />
    </Provider>,
    document.querySelector('#main')
);
