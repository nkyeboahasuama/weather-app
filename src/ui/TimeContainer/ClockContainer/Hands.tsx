import { useState, useEffect } from "react";

const Hands = () => {
  const [timeNow, setTimeNow] = useState<Date>(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      const currentTime = new Date();
      setTimeNow(currentTime);
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const second = timeNow.getSeconds() / 60;
  const minute = (second + timeNow.getMinutes()) / 60;
  const hour = (minute + timeNow.getHours()) / 12;

  return (
    <>
      <div
        style={{
          transform: `rotate(${hour * 360}deg) translateX(-50%)`,
        }}
        className="hand hour"
      ></div>
      <div
        style={{
          transform: `rotate(${minute * 360}deg) translateX(-50%)`,
        }}
        className="hand minute"
      ></div>

      <div
        style={{
          transform: `rotate(${second * 360}deg)  translateX(-50%)`,
        }}
        className="hand second"
      ></div>
    </>
  );
};

export default Hands;
