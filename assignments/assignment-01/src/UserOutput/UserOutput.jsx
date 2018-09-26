import React from 'react';
import './UserOutput.css';

const UserOutput = props => {
  let paragraphStyle = {
    backgroundColor: 'white',
    font: 'inherit',
    width: '60%',
    margin: '16px auto'
  };

  return (
    <div className="UserOutput">
      <p style={paragraphStyle}>Username: {props.username}</p>
      <p>Hello there!</p>
    </div>
  );
};

export default UserOutput;
