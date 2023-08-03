import React from "react";
import Chips from "./Chips";
import CityWeather from "./CityWeather";
import SearchBar from "./SearchBar";

const Home = () => {
  return (
    <div>
      <CityWeather />
      <SearchBar />
      <div className="flex flex-wrap items-center justify-center gap-2">
        <Chips />
        <Chips />
        <Chips />
        <Chips />
        <Chips />
        <Chips />
        <Chips />
        <Chips />
      </div>
    </div>
  );
};

export default Home;
