import { createContext } from "react";

const GlobalContext = createContext();

function GlobalProvider({ children }) {
  const port = "3000";
  return (
    <>
      <GlobalContext.Provider value={{ port }}>
        {children}
      </GlobalContext.Provider>
    </>
  );
}

export { GlobalContext, GlobalProvider };
