import React, { Component } from 'react'
import './TodoListItem.css';
import classNames from 'classnames';

export default class TodoListItem extends Component {
  constructor(props) {
    super(props);


    this.state = {
      showCloseButton: false,
      editing: false,
      labelText: this.props.todo.name
    };
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
    this.refs.textInput.focus();
  };

  handleOnChange = (event) => {
    this.setState({labelText: event.target.value});
  };

  inputLostFocus = () => {
    this.setState({
      editing: false,
      labelText: this.props.todo.name
    });
  };

  updateTodo (newValue) {
    this.props.updateTodo(
        {
          id: this.props.todo.id,
          name: newValue
        }
    );
  }

  handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      this.updateTodo(event.target.value);
      this.setState({editing: false});
    }
  };

  render() {
    return (
        <div
            className={
              classNames(
                  'todo-list__item',
                  {editing: this.state.editing}
              )}
            onMouseEnter={this.handleMouseEnter}
            onMouseLeave={this.handleMouseLeave}
        >
          <div className="label">
            <label
                onDoubleClick={this.handleDoubleClick}
            >
              {this.props.todo.name}
            </label>

            <button
                className={
                  classNames(
                      'destroy',
                      {visible: this.state.showCloseButton}
                  )}
                onClick={this.handleRemoveItem}
            />
          </div>

          <input
              type="text"
              className="edit"
              ref="textInput"
              value={this.state.labelText}
              onChange={this.handleOnChange}
              onBlur={this.inputLostFocus}
              onKeyPress={this.handleKeyPress}
              autoFocus
          />
        </div>
    );
  }
}