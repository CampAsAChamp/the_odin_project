import React, { Component } from "react";

class Card extends Component {
    constructor(props) {
        super(props);

        // Declare state as an object 
        this.state = {
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
                <h2>Card</h2>
                <p>{"Name: " + this.props.name}</p>
                <p>{"Img: " + this.props.img}</p>
            </div>
        );
    }
}

export default Card;