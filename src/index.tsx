import React from 'react';
import ReactDOM from 'react-dom';
import { injectGlobal } from 'emotion';

import { App } from '@/components';

injectGlobal`
  html, body, #app {
    margin: 0;
    padding: 0;
    height: 100%;
  }
`;

ReactDOM.render(<App />, document.querySelector('#app'));
