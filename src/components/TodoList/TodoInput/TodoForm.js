import React, { Component } from 'react';
import { getRandomInt } from '../../../helpers'
import './TodoForm.css'

export default class TodoForm extends Component {
  constructor(props) {
    super(props);

    this.state = {value: ''};
  }


  handleSubmit = (event) => {
    event.preventDefault();

    this.props.handleUpdate({
      id: getRandomInt(0, 10000000000),
      name: this.state.value
    });

    this.setState({value: ''});
  };

  handleChange = (event) => {
    this.setState({value: event.target.value});
  };


  render() {
    return (
        <div className="todo-list__input">
          <form onSubmit={this.handleSubmit}>
            <input type="text"
                   value={this.state.value}
                   onChange={this.handleChange}
                   placeholder="Add something"
            />
          </form>
        </div>
    );
  }
}