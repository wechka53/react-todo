import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './TodoForm.css'

export default class TodoForm extends Component {
  static propTypes = {
    handleUpdate: PropTypes.func,
  };

  constructor(props) {
    super(props);

    this.state = {value: ''};
  }

  render() {
    return (
        <div className='todo-list__input'>
          <form onSubmit={ this.handleSubmit }>
            <input type='text'
                   value={ this.state.value }
                   onChange={ this.handleChange }
                   placeholder='Add something'
            />
          </form>
        </div>
    );
  }

  handleSubmit = event => {
    event.preventDefault();

    this.props.handleUpdate(this.state.value);
    this.setState({value: ''});
  };

  handleChange = event => {
    this.setState({value: event.target.value});
  };
}