import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './TodoList';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from 'redusers';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const store = createStore(
      rootReducer,
  );

  ReactDOM.render(
      <Provider store={ store }>
        <TodoList/>
      </Provider>, div);
  ReactDOM.unmountComponentAtNode(div);
});
