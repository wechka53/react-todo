import React from 'react';
import ReactDOM from 'react-dom';
import TodoListItem from './TodoListItem';

it('renders without crashing', () => {

  const todoItem = {
    id: 1,
    name: 'test',
  };
  const div = document.createElement('div');
  ReactDOM.render(<TodoListItem todo={ todoItem }/>, div);
  ReactDOM.unmountComponentAtNode(div);
});
