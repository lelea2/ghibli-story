import ReactDOM from 'react-dom';
import React from 'react';
import { HashRouter } from 'react-router-dom';
import { useStrict } from 'mobx';
import { Provider } from 'mobx-react';

import App from './components/App';

import moviesStore from './stores/moviesStore';

const stores = {
  moviesStore
};

// For easier debugging
window._____APP_STATE_____ = stores;

useStrict(true);

ReactDOM.render((
  <Provider {...stores}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>
), document.getElementById('root'));