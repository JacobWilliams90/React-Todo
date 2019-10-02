import React, { Component } from "react";

export default class TodoForm extends Component {
  constructor() {
    super();
    this.state = {
      value: ""
    };
  }

  handleChange = (event) => {
    this.setState({
      value: event.target.value
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    this.props.addTask(event, this.state.value);

    this.setState({
      value: ""
    });
  };

  handleClear = (event) => {
      event.preventDefault();
      this.props.clearCompleted(event)
  }

  render() {
    return (
      <form>
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <button onClick={this.handleSubmit}>Add</button>
        <button onClick={this.handleClear}>Clear Completed</button>
      </form>
    );
  }
}
