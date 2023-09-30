import React, { useState, useEffect } from "react";

const StopWatch = () => {
  const [timeNow, setTimeNow] = useState<Date>(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      const currentTime = new Date();
      setTimeNow(currentTime);
    }, 1000);

    // Cleanup the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  const hour = timeNow.getHours();
  const minute = timeNow.getMinutes();
  const second = timeNow.getSeconds();

  return (
    <div className="flex justify-center items-center gap-1 p-0 h-full">
      <div className="w-52 h-52 bg-slate-400 text-white font-bold text-9xl text-center flex items-center justify-center">
        {hour < 10 ? "0" + hour : hour}
      </div>
      <div className="w-52 h-52 bg-slate-400 text-white font-bold text-9xl text-center flex items-center justify-center">
        {minute < 10 ? "0" + minute : minute}
      </div>
      <div className="w-52 h-52 bg-slate-400 text-white font-bold text-9xl text-center flex items-center justify-center">
        {second < 10 ? "0" + second : second}
      </div>
    </div>
  );
};

export default StopWatch;
