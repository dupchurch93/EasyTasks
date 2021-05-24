import ViewButton from "../ViewButton";
import Goals from "../Goals";

const BoardWrapper = () => {
  return (
    <div className="flex">
      <ViewButton />
      <Goals />
    </div>
  );
};

export default BoardWrapper;
