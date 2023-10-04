import Clock from "./TimeContainer/ClockContainer/Clock";
import StopWatch from "./TimeContainer/StopWatchContainer/StopWatch";

const MainPage = () => {
  return (
    <div className=" w-full flex flex-col justify-center">
      <Clock />
      <StopWatch />
    </div>
  );
};

export default MainPage;
