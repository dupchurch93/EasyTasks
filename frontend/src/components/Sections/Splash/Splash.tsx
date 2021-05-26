import { Link } from "react-router-dom";
import greenSticky from "../../../images/greenSticky.svg";
import yellowSticky from "../../../images/yellowSticky.svg";

function Splash() {
  return (
    <div className="grid grid-rows-splash grid-cols-splash">
      <div className="self-center ml-twenty  h-72 w-72">
        <h1 className="text-7xl mb-4">EasyTask</h1>
        <h2 className="text-2xl mb-8">Planning made simple</h2>
        <Link to="/sign-up">
          <button className="bg-royalBlue hover:bg-royalBlueLight text-white font-bold py-2 px-6 rounded-full m-1">
            TRY NOW
          </button>
        </Link>
        <Link to="/login">
          <button className="bg-royalBlue hover:bg-royalBlueLight text-white font-bold py-2 px-6 rounded-full m-1">
            LOG IN
          </button>
        </Link>
      </div>
      <img
        className="absolute top-28 right-56 h-64 w-64"
        src={greenSticky}
        alt="Green sticky note"
      ></img>
      <img
        className="absolute top-56 right-1/4 h-64 w-64 z-10"
        src={yellowSticky}
        alt="Yellow sticky note"
      ></img>
      <div className="h-screen bg-blue-600">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 ml-auto m-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </div>
    </div>
  );
}

export default Splash;
