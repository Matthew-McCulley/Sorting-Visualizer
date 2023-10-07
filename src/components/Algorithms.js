import React from 'react'
import { useState } from 'react';
const Algorithms = () => {
  const [buttonStates, setButtonStates] = useState({
    mergeSort: false,
    quickSort: false,
    heapSort: false,
    bubbleSort: false
  });

  const handleButtonClick = (buttonKey) => {
    // Rest of the code to update the button state
    const newButtonStates = { ...buttonStates };
    newButtonStates[buttonKey] = !newButtonStates[buttonKey];

    Object.keys(newButtonStates).forEach((key) => {
      if (key !== buttonKey) {
        newButtonStates[key] = false;
      }
    });

    setButtonStates(newButtonStates);
  };
  
  return (
    <div className="algorithms">
      <button 
      className={buttonStates['mergeSort'] ? 'selectedAlgorithm' : 'notSelected'}
      onClick={() => handleButtonClick('mergeSort')}>Merge Sort</button>
      <button
        className={buttonStates['quickSort'] ? 'selectedAlgorithm' : 'notSelected'}
        onClick={() => handleButtonClick('quickSort')}>Quick Sort</button>
      <button
        className={buttonStates['heapSort'] ? 'selectedAlgorithm' : 'notSelected'}
        onClick={() => handleButtonClick('heapSort')}>Heap Sort</button>
      <button
        className={buttonStates['bubbleSort'] ? 'selectedAlgorithm' : 'notSelected'}
        onClick={() => handleButtonClick('bubbleSort')}>Bubble Sort</button>
    </div>
  );
};


export default Algorithms