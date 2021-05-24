import BoardWrapper from "./BoardWrapper";
import HourlyComponent from "./DailyView";

const Home = () => {
  return (
    <div className="grid grid-rows-standardLayout">
      <div className="flex justify-center items-center bg-royalBlue h-24">
        Header
      </div>
      <div className="">
        <BoardWrapper />
        <HourlyComponent />
      </div>
      <div className="flex justify-center items-center fixed bottom-0 text-white bg-black h-24 w-full">
        Footer
      </div>
    </div>
  );
};

export default Home;
