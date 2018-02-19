import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';

import TodoListItem from './TodoListItem/TodoListItem';
import TodoForm from './TodoInput/TodoForm';
import addTodo from 'actions/add-todo';
import removeTodo from 'actions/remove-todo';

import './TodoList.css';
import updateTodo from "../../actions/update-todo";

class TodoList extends Component {

  render() {
    return (
        <div className='todo-list--wrapper'>
          <h2>Todo's</h2>
          <TodoForm handleUpdate={ this.props.addTodo }/>

          <div className='todo-list'>
            {
              this.props.todos
                  .slice(0)
                  .reverse()
                  .map(todo =>
                      <TodoListItem
                          key={ todo.id }
                          { ...todo }
                          removeTodo={ this.props.removeTodo }
                          updateTodo={ this.props.updateTodo }
                      />
                  )
            }
          </div>
        </div>
    );
  }

  updateTodo = newTodo => {
    let todos = this.props.todos;

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

TodoList.propTypes = {
  addTodo: PropTypes.func,
  removeTodo: PropTypes.func,
};

function mapStateToProps(state) {
  return {
    todos: state.todos,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addTodo: text => dispatch(addTodo(text)),
    removeTodo: id => dispatch(removeTodo(id)),
    updateTodo: (id, newValue) => dispatch(updateTodo(id, newValue)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
