import React, { Component } from 'react';
import CardView from './components/CardView';
import Scoreboard from './components/Scoreboard';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Memory Flipcard Game</h1>
        <Scoreboard />
        <CardView />
      </div>
    );
  }
}

export default App;
