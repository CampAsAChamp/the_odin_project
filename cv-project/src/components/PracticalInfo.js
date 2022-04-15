import React, { Component } from "react";

class PracticalInfo extends Component {
    constructor() {
        super();

        // Declare state as an object 
        // company name, position title, main tasks of your job, date from and until when you worked for that company
        this.state = {
            companyName: '',
            positionTitle: '',
            positionTasks: '',
            fromTime: '',
            toTime: '',
        };

        // Need to bind this function so it knows what context to operate in
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // Updates the state's value every time we do something in the form
    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        this.setState({
            companyName: this.state.companyName,
            positionTitle: this.state.positionTitle,
            positionTasks: this.state.positionTasks,
            fromTime: this.state.toTime,
            toTime: this.state.fromTime,
        })
        console.log(this.state)
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <h2>Practical Info</h2>
                <form onSubmit={this.handleSubmit}>
                    <label> Company Name: </label>
                    <input type="text" name="companyName" value={this.state.companyName} onChange={this.handleInputChange} />
                    <label> Position Title: </label>
                    <input type="text" name="positionTitle" value={this.state.positionTitle} onChange={this.handleInputChange} />
                    <label> Position Tasks: </label>
                    <input type="text" name="positionTasks" value={this.state.positionTasks} onChange={this.handleInputChange} />
                    <label> From: </label>
                    <input type="text" name="fromTime" value={this.state.fromTime} onChange={this.handleInputChange} />
                    <label> To: </label>
                    <input type="text" name="toTime" value={this.state.toTime} onChange={this.handleInputChange} />
                    <button>Submit Info</button>
                </form>
            </div>
        );
    }
}


export default PracticalInfo;