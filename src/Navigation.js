import React, { Component } from 'react';
import './styles/Navigation.css';

export default class Navigation extends Component {
  render() {
    return (
      <header className="header__container">
        <div className="logo">
          <h2 className="header__name">Anne Zhou</h2>
        </div>
        <nav className="navigation__container">
          <ul>
            <li><a href="/">About</a></li>
            <li><a href="/projects">Projects</a></li>
          </ul>
        </nav>
      </header>
    );
  }
}
