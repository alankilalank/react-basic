import React, { Component } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Feeds from './Feeds';
import Widget from './Widget';
import Subscribe from './Subscribe';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <div className="content">
          <Sidebar />
          <main className="app-view">
            <div className="detail">
              <Feeds />
              <div className="right-sidebar">
                <Widget />
                <Widget />
              </div>
            </div>
            <Subscribe />
          </main>
        </div>
      </div>
    );
  }
}

export default App;
