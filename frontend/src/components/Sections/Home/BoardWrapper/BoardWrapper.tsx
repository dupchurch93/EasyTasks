import ViewButton from "../ViewButton";
import Goals from "../Goals";
import CurrentDate from "../../../Core/Date"

const BoardWrapper = () => {
  return (
    <div className="flex justify-between w-full">
      <ViewButton />
      <Goals />
      <CurrentDate />
    </div>
  );
};

export default BoardWrapper;
