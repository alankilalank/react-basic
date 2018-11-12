import React, { Component } from 'react';

class Sidebar extends Component {
  render() {
    return (
      <nav className="sidebar">
        <div className="profile">
          <img
            src="https://picsum.photos/200/300/?random"
            alt="User Avatar"
            className="avatar"
          />
          <div className="name-with-handle">
            <p className="name">John Doe</p>
            <p className="handle">@johndoe</p>
          </div>
          <button className="btn-info">Follow</button>
        </div>
      </nav>
    );
  }
}

export default Sidebar;
