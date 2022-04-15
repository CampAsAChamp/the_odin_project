import React, { Component } from "react";

class EducationInfo extends Component {
    constructor() {
        super();

        // Declare state as an object 
        // school name, title of study, date of study
        this.state = {
            schoolName: '',
            major: '',
            fromTime: '',
            toTime: '',
        };

        // Need to bind this function so it knows what context to operate in
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

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
            schoolName: this.state.schoolName,
            major: this.state.major,
            fromTime: this.state.fromTime,
            toTime: this.state.toTime,
        })
        console.log(this.state)
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <h2>Education Info</h2>
                <form onSubmit={this.handleSubmit}>
                    <label> School Name: </label>
                    <input type="text" name="schoolName" value={this.state.schoolName} onChange={this.handleInputChange} />
                    <label> Major: </label>
                    <input type="text" name="major" value={this.state.major} onChange={this.handleInputChange} />
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


export default EducationInfo;