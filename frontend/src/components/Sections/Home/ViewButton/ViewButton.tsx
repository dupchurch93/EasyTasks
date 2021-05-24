import { useBoardViewContext } from "../../../../context/BoardViewContext";

type BoardViewContextType = {
  boardViewActive: boolean;
  setBoardViewActive: (state: boolean) => void;
};

const ViewButton = () => {
  const { boardViewActive, setBoardViewActive } =
    useBoardViewContext() as BoardViewContextType;

  console.log(boardViewActive);
  return (
    <button
      onClick={() => {
        setBoardViewActive(!boardViewActive);
      }}
      className={`px-8 py-3 transition focus:outline-none duration-1000 ease-in-out font-semibold rounded ${
        boardViewActive ? "bg-yellow-400" : "bg-royalBlueLight"
      } text-coolGray-800`}
    >
      {boardViewActive ? "Board View" : "List View"}
    </button>
  );
};

export default ViewButton;
