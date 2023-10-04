import Hands from "./Hands";
import TimeNumbers from "./TimeNumbers";

const Clock = () => {
  return (
    <div className="bg-clock-img w-full h-screen flex justify-center items-center">
      <div className="clock h-[20rem] w-[20rem] bg-gray-800 border-8 border-slate-700 rounded-full relative">
        <TimeNumbers />
        <Hands />
      </div>
    </div>
  );
};

export default Clock;
