import React, { Component } from "react";

class Scoreboard extends Component {
    constructor() {
        super();

        // Declare state as an object 
        this.state = {
            currScore: 0,
            bestScore: 0
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

        })
        console.log(this.state)
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <h2>Scoreboard</h2>
            </div>
        );
    }
}


export default Scoreboard;