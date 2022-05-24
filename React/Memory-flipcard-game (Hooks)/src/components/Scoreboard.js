import React, { Component } from "react";

class Scoreboard extends Component {
    render() {
        return (
            <div>
                <h2>Scoreboard</h2>
                <p>{"Current Score: " + this.props.currScore}</p>
                <p>{"High Score: " + this.props.highScore}</p>
            </div>
        );
    }
}

export default Scoreboard;