import { createContext, useContext, useState, FC } from "react";

const BoardViewContext = createContext({});

export const useBoardViewContext = () => useContext(BoardViewContext);

/* This component uses the React.FC to handle its children
however its being depreciated*/
const BoardViewContextProvider: FC = ({ children }) => {
  const [boardViewActive, setBoardViewActive] = useState(false);

  return (
    <BoardViewContext.Provider
      value={{
        boardViewActive,
        setBoardViewActive,
      }}
    >
      {children}
    </BoardViewContext.Provider>
  );
};

export default BoardViewContextProvider;
