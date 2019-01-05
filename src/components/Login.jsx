import React, { Component } from 'react';
import Button from './Button';
import './Login.css';

class Login extends Component {
  render() {
    return (
      <div className="login">
        <h2 className="login-title">Login to your account</h2>
        <form className="login-form">
          <input
            type="text"
            className="login-input"
            autoComplete="off"
            placeholder="Username / Email"
          />
          <input
            type="password"
            className="login-input"
            placeholder="Password"
          />
          <Button type="submit">Login</Button>
        </form>
      </div>
    );
  }
}

export default Login;
