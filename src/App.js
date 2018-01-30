import React, { Component } from 'react';
import './App.css';
import Options from './components/Options.js';
import ItemList from './components/ItemList.js';
import Timer from './components/Timer.js';
import Footer from './components/Footer.js';

class App extends Component {
  render() {
    return (
      <main>
        <Options />
        <ItemList />
        <Timer />
        <Footer />
      </main>
    );
  }
}

export default App;
