// Handle the input field with the logic

import React, { Component } from "react";
import Overview from './components/Overview';


class App extends Component {
  constructor() {
    super();

    // Declare state as an object 
    this.state = {
      task: '',
      tasks: []
    };

    // Need to bind this function so it knows what context to operate in
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // Updates the state's value every time we do something in the form
  handleChange(event) {
    // Can't change the event.target.value
    this.setState({
      task: event.target.value
    });
  }

  handleSubmit(event) {
    if (this.state.task !== "") {
      this.setState({
        task: '',
        tasks: [...this.state.tasks, this.state.task]
      })
      event.preventDefault();
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label> Input: </label>
          <input type="text" name="input" value={this.state.task} onChange={this.handleChange} />
          <button>Submit Task</button>
        </form>
        <Overview tasks={this.state.tasks} />
      </div>
    );
  }
}

export default App;