import React, { createContext, useState } from 'react';


export const MyContext = createContext();

export const MyProvider = ({ children }) => {
  const [value, setValue] = useState('default');

  return (
    <MyContext.Provider value={{ value, setValue }}>
      {children}
    </MyContext.Provider>
  );
};
