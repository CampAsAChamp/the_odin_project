import React, { Component } from 'react';
import CardView from './components/CardView';
import Scoreboard from './components/Scoreboard';

class App extends Component {
  constructor() {
    super()

    this.state = {
      currScore: 0,
      highScore: 0,
    }
  }

  increaseCurrScore = () => {
    this.setState({ currScore: this.state.currScore + 1 })
  }

  updateHighScore = () => {
    if (this.state.currScore > this.state.highScore) {
      this.setState({ highScore: this.state.currScore })
    }
    this.setState({ currScore: 0 })

  }

  render() {
    return (
      <div>
        <h1>Memory Flipcard Game</h1>
        <Scoreboard currScore={this.state.currScore} highScore={this.state.highScore} />
        <CardView currScore={this.state.currScore} highScore={this.state.highScore} increaseScoreFunction={this.increaseCurrScore} updateHighScoreFunction={this.updateHighScore} />
      </div>
    );
  }
}

export default App;
