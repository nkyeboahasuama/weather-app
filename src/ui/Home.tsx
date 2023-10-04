import React, { useState } from "react";
import Chips from "./Chips";
import CityWeather from "./CityWeather";
import SearchBar from "./SearchBar";
import { constants } from "buffer";
import { data } from "../assets/api-data/response";
import Forecast from "./Forecast";
import FetchWeather from "./FetchWeather";

const Home = () => {
  const [weather, setWeather] = useState(data);
  return (
    <div
      className={`h-screen w-full pb-5 px-5 overflow-auto bg-[url('/src/assets/images/${
        weather.current_weather.temperature > 30 ? "sunny1.webp" : "rainy1.jpg"
      }')] bg-cover`}
    >
      <div className="flex flex-col justify-around">
        <CityWeather />
        <div className="bg-orange-500 mb-5 rounded-lg">
          <h1 className="text-lg font-extrabold pt-2">Forecast</h1>
          {Object.entries(weather.forecast).map(([key, value]) => (
            <Forecast key={key} data={key} value={value} />
          ))}
        </div>
        <div className="w-full mx-auto flex flex-wrap items-center justify-between gap-4">
          <Chips data="country" value={weather.location.country} />

          {Object.entries(weather.current_weather).map(([key, value]) => (
            <Chips key={key} data={`${key}`} value={`${value}`} />
          ))}
        </div>
      </div>
      <SearchBar />
    </div>
  );
};

export default Home;
