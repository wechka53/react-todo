import React, { Component } from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames';

import './TodoListItem.css';

export default class TodoListItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showCloseButton: false,
      editing: false,
      labelText: this.props.todo.name,
    };
  }

  render() {
    return (
        <div
            className={
              classNames(
                  'todo-list__item',
                  {editing: this.state.editing}
              ) }
            onMouseEnter={ this.handleMouseEnter }
            onMouseLeave={ this.handleMouseLeave }
        >
          {
            !this.state.editing &&

            <div className='label'>
              <label
                  onDoubleClick={ this.handleDoubleClick }
              >
                { this.props.todo.name }
              </label>

              <button
                  className={
                    classNames(
                        'destroy',
                        {visible: this.state.showCloseButton}
                    ) }
                  onClick={ this.handleRemoveItem }
              />
            </div>
          }

          {
            this.state.editing &&

            <input
                type='text'
                className='edit'
                ref='textInput'
                value={ this.state.labelText }
                onChange={ this.handleOnChange }
                onBlur={ this.inputLostFocus }
                onKeyPress={ this.handleKeyPress }
            />
          }
        </div>
    );
  }

  handleRemoveItem = () => {
    this.props.removeTodo(this.props.todo.id);
  };

  handleMouseEnter = () => {
    this.setState({showCloseButton: true});
  };

  handleMouseLeave = () => {
    this.setState({showCloseButton: false});
  };

  handleDoubleClick = () => {
    this.setState({editing: true});
    setTimeout(() => {
      this.refs.textInput.focus();
    }, 100);
  };

  handleOnChange = event => {
    this.setState({labelText: event.target.value});
  };

  inputLostFocus = () => {
    this.setState({
      editing: false,
      labelText: this.props.todo.name,
    });
  };

  handleKeyPress = event => {
    if (event.key === 'Enter') {
      this.updateTodo(event.target.value);
      this.setState({editing: false});
    }
  };

  updateTodo(newValue) {
    this.props.updateTodo(
        {
          id: this.props.todo.id,
          name: newValue,
        }
    );
  }
}

TodoListItem.propTypes = {
  todo: PropTypes.object,
  removeTodo: PropTypes.func,
  updateTodo: PropTypes.func,
};