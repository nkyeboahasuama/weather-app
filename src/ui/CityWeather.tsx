import React from "react";
import { WiDegrees } from "react-icons/wi";

const CityWeather = () => {
  return (
    <div>
      <div className=" h-[15rem] flex items-center justify-center">
        <div>
          <div className="text-4xl">Hong Kong</div>
          <div className="flex items-center justify-center">
            <div className="text-8xl">29</div>
            <div className="text-5xl">&#176;</div>
          </div>
          <div>
            <small>Mostly Clear</small>
          </div>
          <div>
            <small>H:31 &#176; L:28 &#176;</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CityWeather;
