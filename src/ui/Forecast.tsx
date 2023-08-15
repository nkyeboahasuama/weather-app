import React from "react";
import {
  BsFillCloudSunFill,
  BsFillCloudFill,
  BsCloudsFill,
} from "react-icons/bs";

interface IValue {
  date: string;
  temperature_min: number;
  temperature_max: number;
  conditions: string;
}
interface IForcast {
  data: string;
  value: IValue;
}
const Forecast: React.FC<IForcast> = ({ data, value }) => {
  return (
    <div className="flex justify-center">
      <div className="flex bg-gray-600 h-12 my-3 items-center justify-around rounded-lg text-white w-11/12">
        <div>{value.date}</div>
        {value.conditions.toLowerCase().includes("cloudy") ? (
          <div>
            <BsCloudsFill />
          </div>
        ) : value.conditions.toLowerCase().includes("clear") ? (
          <div>
            <BsFillCloudFill />
          </div>
        ) : value.conditions.toLowerCase().includes("sunny") ? (
          <BsFillCloudSunFill />
        ) : (
          <div>Clear</div>
        )}
        <div className="flex items-center gap-1">
          {value.temperature_min}°
          <div className="relative h-2 w-20 bg-blue-500 rounded-md">
            <div
              className="absolute left-0 top-0 h-full bg-blue-300 rounded-md"
              style={{
                width: `${
                  (value.temperature_min /
                    (value.temperature_max - value.temperature_min)) *
                  10
                }%`,
              }}
            ></div>
          </div>
          {value.temperature_max}°
        </div>
      </div>
    </div>
  );
};

export default Forecast;
