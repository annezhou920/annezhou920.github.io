import React, { Component } from 'react';
import './styles/App.css';

import Navigation from './Navigation.js';
import About from './About.js';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <About />
      </div>
    );
  }
}
