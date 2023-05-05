import { createContext } from "react";

export const SomeContext = createContext();

export const HookUseContext = ({ children }) => {
  const contextValeu = "testing value";

  return (
    <SomeContext.Provider value={{ contextValeu }}>
      {children}
    </SomeContext.Provider>
  );
};
