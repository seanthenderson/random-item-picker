import React, { Component } from 'react';
import './App.css';
import Options from './components/Options.js';
import ItemList from './components/ItemList.js';
import Buttons from './components/Buttons.js';
import Timer from './components/Timer.js';

const initialTime = document.querySelector('input[type="text"');

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
