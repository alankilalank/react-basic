import React from 'react';

const LoginIndicator = () => {
  // if in JSX
  const username = 'alankilalank';
  const isValid = true;
  return (
    <div>
      <span>{username ? 'Hello ' + username : 'Not Logged in'}</span>
      {username && <p>You're logged in as {username.toUpperCase()}</p>}
      <span>{isValid ? 'valid' : 'not valid'}</span>
      <span>
        {isValid && 'valid'}
        {!isValid && 'not valid'}
      </span>
    </div>
  );
};

export default LoginIndicator;
