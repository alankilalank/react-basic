import React, { Component } from 'react';
import './Subscribe.css';

class Subscribe extends Component {
  render() {
    return (
      <div class="subscribe">
        <h2 class="subscribe-title">Subscribe to get weekly newsletter</h2>
        <form className="subscribe-form">
          <input type="text" className="subscribe-input" />
          <button class="btn-info">Subscribe</button>
        </form>
      </div>
    );
  }
}

export default Subscribe;
