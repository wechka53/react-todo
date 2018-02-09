import React, { Component } from 'react'
import TodoListItem from "./TodoListItem/TodoListItem";
import TodoForm from "./TodoInput/TodoForm";
import './TodoList.css';

export default class TodoList extends Component {

  constructor(props) {
    super(props);

    let todos = [
      {
        id: 1,
        name: 'test1',
      },
      {
        id: 2,
        name: 'test2',
      },
    ];

    let inputValue = '';

    this.state = {todos, inputValue};


  }

  render() {
    return (
        <div className='todo-list--wrapper'>
          <h2>Todo's</h2>
          <TodoForm handleUpdate={ this.addTodo }/>

          <div className='todo-list'>
            {
              this.state.todos
                  .slice(0)
                  .reverse()
                  .map(todo =>
                      <TodoListItem
                          key={ todo.id }
                          todo={ todo }
                          removeTodo={ this.removeTodo }
                          updateTodo={ this.updateTodo }
                      />
                  )
            }
          </div>
        </div>
    );
  }

  addTodo = todo => {
    let todos = this.state.todos;

    todos.push(todo);

    this.setState({todos});
  };

  updateTodo = newTodo => {
    let todos = this.state.todos;

    todos = todos.map(todo => {
      if (todo.id === newTodo.id) {
        todo.name = newTodo.name;
      }

      return todo;
    });

    this.setState({todos});
  };

  removeTodo = todoId => {
    let todos = this.state.todos;
    let index = todos.findIndex(todo => todo.id === todoId);
    todos.splice(index, 1);

    this.setState({todos});
  };
}