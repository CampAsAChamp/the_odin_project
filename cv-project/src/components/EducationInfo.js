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
        this.handleSchoolNameChange = this.handleSchoolNameChange.bind(this);
        this.handleMajorChange = this.handleMajorChange.bind(this);
        this.handleFromTimeChange = this.handleFromTimeChange.bind(this);
        this.handleToTimeChange = this.handleToTimeChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // Updates the state's value every time we do something in the form
    handleSchoolNameChange(event) {
        this.setState({
            schoolName: event.target.value
        });
    }

    handleMajorChange(event) {
        this.setState({
            major: event.target.value
        });
    }

    handleFromTimeChange(event) {
        this.setState({
            fromTime: event.target.value
        });
    }

    handleToTimeChange(event) {
        this.setState({
            toTime: event.target.value
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
                    <input type="text" name="schoolName" value={this.state.schoolName} onChange={this.handleSchoolNameChange} />
                    <label> Major: </label>
                    <input type="text" name="major" value={this.state.major} onChange={this.handleMajorChange} />
                    <label> From: </label>
                    <input type="text" name="fromTime" value={this.state.fromTime} onChange={this.handleFromTimeChange} />
                    <label> To: </label>
                    <input type="text" name="toTime" value={this.state.toTime} onChange={this.handleToTimeChange} />
                    <button>Submit Info</button>
                </form>
            </div>
        );
    }
}


export default EducationInfo;