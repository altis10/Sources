// ElementList.js
import React, { useState } from 'react';
import ButtonComp from './button';

function ElementList() {
  // State to store the array of elements
  const [elements, setElements] = useState([]);

  // Function to add a new element to the array
  const addElement = () => {
    // Create a new element (for example, a random number)
    const newElement = Math.floor(Math.random() * 100);

    // Update the array with the new element
    setElements([...elements, newElement]);
  };

  return (
    <div>
      <h2>Element List</h2>
      <ButtonComp onClick={addElement}>Add Element</ButtonComp>
      <ul>
        {elements.map((element, index) => (
          <li key={index}>{element}</li>
        ))}
      </ul>
    </div>
  );
}

export default ElementList;
