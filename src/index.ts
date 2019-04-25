import * as ReactDOM from 'react-dom';
import * as React from 'react';

import Main from './packages/base/redux-saga/main';

const e = React.createElement;
const domContainer = document.querySelector('#main');

ReactDOM.render(e(Main, { name: 'Goshan' }), domContainer);
