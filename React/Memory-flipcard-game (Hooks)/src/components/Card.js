import React, { Component } from "react";
import '../styles/Card.css';

class Card extends Component {
    render() {
        return (
            <div className="card" onClick={this.props.onClick}>
                <h2>{this.props.name}</h2>
                <img className="team-logo" src={this.props.img} alt="team logo" />
            </div>
        );
    }
}

export default Card;