import React from 'react';

import classes from './Button.css';

const Button = ({ clicked, children, buttonType }) => {
  return (
    <button
      type="button"
      className={[classes.Button, classes[buttonType]].join(' ')}
      onClick={clicked}
    >
      {children}
    </button>
  );
};

export default Button;
