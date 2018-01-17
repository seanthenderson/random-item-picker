import React, { Component } from 'react';
import './App.css';
import Options from './components/Options.js';
import Items from './components/Items.js';
import Buttons from './components/Buttons.js';
import Timer from './components/Timer.js';

class App extends Component {
  render() {
    return (
      <main>
        <Options />
        <Items />
        <Buttons />
        <Timer />
      </main>
    );
  }
}

export default App;
