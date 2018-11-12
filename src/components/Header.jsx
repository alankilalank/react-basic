import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <header className="header">
        <h1 className="header-heading">Working with JSX</h1>
        <ul className="header-list">
          <li className="header-list-item">
            <a href="/">Home</a>
          </li>
          <li className="header-list-item">
            <a href="/">News</a>
          </li>
          <li className="header-list-item">
            <a href="/">About</a>
          </li>
          <li className="header-list-item">
            <a href="/">Contact</a>
          </li>
        </ul>
      </header>
    );
  }
}

export default Header;
