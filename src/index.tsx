// react
import * as React from 'react';
import { render } from 'react-dom';

// redux
import { createStore } from 'redux';
import { Provider } from 'react-redux';

// components
import Main from './packages/base/redux-saga/main';

const store = createStore(reducer);

render(
    <Provider store={store}>
        <Main name='Goshan' />
    </Provider>,
    document.querySelector('#main')
);
