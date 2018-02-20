import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';

import TodoListItem from './TodoListItem/TodoListItem';
import TodoForm from './TodoInput/TodoForm';
import addTodo from 'actions/add-todo';
import removeTodo from 'actions/remove-todo';
import updateTodo from 'actions/update-todo';

import './TodoList.css';

class TodoList extends Component {
  static propTypes = {
    todos: PropTypes.arrayOf(PropTypes.object),
    addTodo: PropTypes.func,
    updateTodo: PropTypes.func,
    removeTodo: PropTypes.func,
  };

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
}

const mapStateToProps = state => ({todos: state.todos});

const mapDispatchToProps = dispatch => ({
  addTodo: text => dispatch(addTodo(text)),
  removeTodo: id => dispatch(removeTodo(id)),
  updateTodo: (id, newValue) => dispatch(updateTodo(id, newValue)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
