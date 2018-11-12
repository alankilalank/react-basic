import React, { Component } from 'react';

// function component
function World() {
  return <span>World</span>;
}

// class component
class Hello extends Component {
  render() {
    return <span>Hellow</span>;
  }
}

// class component that wrapped another child components (Hello & World)
class HelloWorld extends Component {
  render() {
    return (
      <div className="container">
        <Hello /> <World />
      </div>
    );
  }
}

export default HelloWorld;
