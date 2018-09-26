import React from 'react';

const ValidationComponent = ({ text }) => {
  let feedbackText = text.length < 5 ? 'Text too short' : 'Text long enough';
  return (
    <div>
      <p>{text}</p>
      <p>{feedbackText}</p>
    </div>
  );
};

export default ValidationComponent;
