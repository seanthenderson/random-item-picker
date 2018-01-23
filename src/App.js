import React, { Component } from 'react';
import './App.css';
import Options from './components/Options.js';
import ItemList from './components/ItemList.js';
import Buttons from './components/Buttons.js';
import Timer from './components/Timer.js';

class App extends Component {
  render() {
    return (
      <main>
        <Options />
        <ItemList />
        <Timer />
      </main>
    );
  }
}

export default App;
