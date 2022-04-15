import React, { Component } from "react";
import GeneralInfoView from "./GeneralInfoView";

class GeneralInfo extends Component {
    constructor() {
        super();

        // Declare state as an object
        this.state = {
            name: '1',
            email: '2',
            phone: '3',
            entry: {
                name: '',
                email: '',
                phone: '',
            }
        };

        // Need to bind this function so it knows what context to operate in
        this.handleSubmit = this.handleSubmit.bind(this);
        this.editButtonFunction = this.editButtonFunction.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this)
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
            entry: {
                name: this.state.name,
                email: this.state.email,
                phone: this.state.phone,
            },
            name: '',
            email: '',
            phone: '',
        })
        event.preventDefault();
    }

    editButtonFunction(event) {
        this.setState({
            name: this.state.entry.name,
            email: this.state.entry.email,
            phone: this.state.entry.phone,
            entry: {
                name: '',
                email: '',
                phone: '',
            },
        })
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <h2>General Info</h2>
                <form onSubmit={this.handleSubmit}>
                    <label> Name: </label>
                    <input type="text" name="name" value={this.state.name} onChange={this.handleInputChange} />
                    <label> Email: </label>
                    <input type="text" name="email" value={this.state.email} onChange={this.handleInputChange} />
                    <label> Phone: </label>
                    <input type="text" name="phone" value={this.state.phone} onChange={this.handleInputChange} />
                    <button onClick={this.editButtonFunction}>Edit Info</button>
                    <button>Submit Info</button>
                </form>
                <GeneralInfoView entry={this.state.entry} />
            </div>
        );
    }
}

export default GeneralInfo;