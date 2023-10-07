import React, { useState } from 'react';

const Button = ({ text }) => {
  // Initialize a state variable to track the button's state
  const [isClicked, setIsClicked] = useState(false);

  // Function to toggle the button's state and class
  function toggleAlgorithm() {
    setIsClicked(!isClicked);
  }

  // Determine the className based on the button's state
  const buttonClassName = isClicked ? 'clicked' : 'notClicked';

  return (
    <button className={buttonClassName} onClick={toggleAlgorithm}>
      {text}
    </button>
  );
};

export default Button;

