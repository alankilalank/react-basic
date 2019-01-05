import React, { Component } from 'react';
import Profile from './Profile';
import Subscribe from './Subscribe';
import Widget from './Widget';
import List from './List';
import Login from './Login';
import LoginIndicator from './LoginIndicator';
import './App.css';

function getFullname(firstName, lastName) {
  return firstName + ' ' + lastName;
}

class App extends Component {
  render() {
    const buttonLabel = 'Register';
    const styleHeading = { marginBottom: '10px' };
    const isOnline = true;

    return (
      <div className="container">
        <div className="box box-profile">
          <Profile />
        </div>
        <div className="box box-login">
          <Login />
        </div>
        <div className="box box-list">
          <h3 style={{ marginBottom: '8px' }}>Learning path :</h3>
          <List />
        </div>
        <div className="box box-widget">
          <h3 style={{ marginBottom: 10 }}>Users review</h3>
          <Widget score={9.5} />
          <Widget score={8.0} />
        </div>
        <div className="box box-subscribe">
          <Subscribe />
        </div>

        <div className="box">
          <h3 style={styleHeading}>Javascript in JSX</h3>

          {/* operator */}
          <p>2 + 2 = {2 + 2}</p>

          {/* call a function*/}
          <p>{getFullname('John', 'Doe')}</p>

          {/* dynamic button label*/}
          <button className="btn-primary">{buttonLabel}</button>

          {/* dynamic classes */}
          <span
            className={isOnline ? 'badge badge-green' : 'badge badge-yellow'}
          >
            {isOnline ? 'online' : 'away'}
          </span>
          <br />
          <br />
          <b>
            Javascript inside JSX must be Expression that produce a value,
            example :{' '}
          </b>
          <ul>
            <li>
              <code>operator (2 + 2)</code>
            </li>
            <li>
              <code>buttonLabel</code>
            </li>
            <li>
              a function call <code>getFullname()</code>
            </li>
          </ul>
          <br />
          <b>
            What we can't use inside JSX is <i>statements</i>, example :{' '}
          </b>
          <ul>
            <li>
              <code>var a = 5</code>
            </li>
            <li>
              <code>{`while(i < 7) { i++ }`}</code>
            </li>
            <li>
              <code>{`if(true) { 17; }`}</code>
            </li>
          </ul>
        </div>
        <div className="box">
          <h3 style={styleHeading}>"if" in JSX</h3>
          <p>How to write a conditional "if" in JSX</p>
          <p>1. Ternary Operator (? :)</p>
          <p>2. Boolean Operator ({`&&`})</p>
          <br />
          <LoginIndicator />
        </div>
        <div className="box">
          <h3>Close every element</h3>
          <code>
            {`// DO THIS: `} <br />
            {`return <br/>;`} <br />
            {`return <input type='password' .../>;`} <br />
            {`return <li>text</li>;`} <br />
            {`// NOT THIS:`} <br />
            {`return <br>;`} <br />
            {`return <input type='password' ...>;`} <br />
            {`return <li>text;`} <br />
          </code>
        </div>
      </div>
    );
  }
}

export default App;
