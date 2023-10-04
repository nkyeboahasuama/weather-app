import React from "react";
import { WiDegrees } from "react-icons/wi";
import { data } from "../assets/api-data/response";

interface Ilocation {
  city: string;
  temperature: string;
  latitude: number;
  longitude: number;
}
interface IProps {
  city_weather: Ilocation;
}

const CityWeather = () => {
  return (
    <div>
      <div className=" h-[15rem] text-white flex items-center justify-center">
        <div>
          <div className="text-4xl">{data.location.city}</div>
          <div className="flex items-start justify-center">
            <div className="text-8xl">{data.current_weather.temperature}</div>
            <div className="text-5xl">&#176;</div>
          </div>
          <div>
            <small>{data.current_weather.conditions}</small>
          </div>
          <div>
            <small>
              Lat: {data.location.latitude} &#176; Long:{" "}
              {data.location.longitude}&#176;
            </small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CityWeather;
