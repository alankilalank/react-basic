import React from 'react';
import Button from './Button';
import './Profile.css';

const Profile = () => {
  return (
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
      <Button>Follow</Button>
    </div>
  );
};

export default Profile;
