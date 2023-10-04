import axios from "axios";
import React, { useEffect, useState } from "react";

const FetchWeather = () => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://weather338.p.rapidapi.com/locations/search",
      params: {
        query: "accra",
        language: "en",
      },
      headers: {
        "X-RapidAPI-Key": "10b46853a1mshc9e56ea80010b6fp1cae72jsn7d6a3f31f0c0",
        "X-RapidAPI-Host": "weather338.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then((response) => {
        console.log(response.data);
        setWeatherData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
    console.log("jj");
  }, []);
  return <div>o</div>;
};

export default FetchWeather;
