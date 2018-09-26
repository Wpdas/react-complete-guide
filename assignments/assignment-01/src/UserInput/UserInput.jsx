import React from 'react';
import './UserInput.css';

const UserInput = props => {
  let style = {
    backgroundColor: 'white',
    font: 'inherit',
    border: '1px solid blue',
    padding: '8px',
    marginTop: '16px'
  };

  return (
    <input
      className="UserInput"
      type="text"
      style={style}
      onChange={props.changed}
      value={props.username}
    />
  );
};

export default UserInput;
