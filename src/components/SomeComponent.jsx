import React, { useContext } from 'react';
import { MyContext } from './MyContext'; 

const SomeComponent = () => {
  const { value, setValue } = useContext(MyContext); 

  if (!value) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <p>Context Value: {value}</p>
      <button onClick={() => setValue('new value')}>Change Value</button>
    </div>
  );
};

export default SomeComponent;
