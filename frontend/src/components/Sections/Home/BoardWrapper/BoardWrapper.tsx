import ViewButton from "../ViewButton";
import Goals from "../Goals";
import CurrentDate from "../../../Core/Date"

const BoardWrapper = () => {
  return (
    <div className="flex justify-between w-full p-3 items-center">
      <ViewButton />
      <Goals />
      <CurrentDate />
    </div>
  );
};

export default BoardWrapper;
