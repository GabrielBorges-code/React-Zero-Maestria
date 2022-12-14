// 1 - criar contexto

import { useState, createContext } from "react";

export const CouterContext = createContext();

// 2 - criar provider

export const CouterContextProvider = ({ children }) => {
  const [couter, setCouter] = useState(5);

  return (
    <CouterContext.Provider value={{ couter, setCouter }}>
      {children}
    </CouterContext.Provider>
  );
};
