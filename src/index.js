import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from 'components/App/App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from 'redusers';

import registerServiceWorker from './registerServiceWorker';


const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

console.log(store.getState().todos);

ReactDOM.render(
    <Provider store={ store }>
      <App/>
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
