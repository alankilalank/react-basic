import React, { Component } from 'react';
import Button from './Button';
import './Subscribe.css';

class Subscribe extends Component {
  render() {
    return (
      <div className="subscribe">
        <h2 className="subscribe-title">Subscribe to get weekly newsletter</h2>
        <form className="subscribe-form">
          <input type="text" className="subscribe-input" />
          <Button>Subscribe</Button>
        </form>
      </div>
    );
  }
}

export default Subscribe;
