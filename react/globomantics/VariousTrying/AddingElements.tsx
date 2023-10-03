// App.js
import React from 'react';
import ButtonComp from './button';
import ElementList from './elementList';

function AddingElements() {
  return (
    <div>
      <h1>React App with Button</h1>
      <ButtonComp onClick={undefined} />
      <ElementList />
    </div>
  );
}

export default AddingElements;
