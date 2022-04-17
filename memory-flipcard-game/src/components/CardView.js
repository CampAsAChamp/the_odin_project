import React, { Component } from "react";
import Cards from "../Data"
import Card from "./Card";

class CardView extends Component {
    constructor() {
        super();

        console.log("Global Cards:", Cards)

        // Declare state as an object 
        this.state = {
            clicked: [],
            unclicked: [],
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
                <h2>Card View</h2>
                <Card name={Cards[0].name} img={Cards[0].img} />
                <Card name={Cards[1].name} img={Cards[1].img} />
                <Card name={Cards[2].name} img={Cards[2].img} />
                <Card name={Cards[3].name} img={Cards[3].img} />
            </div>
        );
    }
}


export default CardView;