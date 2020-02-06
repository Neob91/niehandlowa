import React from 'react';
import ReactDOM from 'react-dom';
import { injectGlobal } from 'emotion';

import { App } from '@/components';

injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Playfair+Display:400,900|Source+Sans+Pro:400,600,700&display=swap');

  html, body, #app {
    margin: 0;
    padding: 0;
    height: 100%;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
  }
`;

ReactDOM.render(<App />, document.querySelector('#app'));
