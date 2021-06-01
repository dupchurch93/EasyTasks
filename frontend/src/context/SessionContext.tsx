import { createContext, useContext, useState, FC } from "react";

const SessionContext = createContext({});

export const useSessionContext = () => useContext(SessionContext);

/* This component uses the React.FC to handle its children
however its being depreciated*/
const SessionContextProvider: FC = ({ children }) => {
  const [sessionErrors, setSessionErrors] = useState<string[]>([""]);

  return (
    <SessionContext.Provider
      value={{
        sessionErrors,
        setSessionErrors,
      }}
    >
      {children}
    </SessionContext.Provider>
  );
};

export default SessionContextProvider;
