import { useEffect } from "react";
import "./App.css";
import Axios from "axios";
import { useState } from "react";
import Weather from "./components/Weather";

function App() {
  const [weatherInfo, setWeatherInfo] = useState(null);

  // geolicacion
  const succes = (pos) => {
    const lat = pos.coords.latitude;
    const lon = pos.coords.longitude;
    const API_KEY = "9193825f5d3034b4439cd032761b8187";

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;

    Axios.get(url)
      .then(({ data }) => setWeatherInfo(data))
      .catch((err) => console.log(err));
  };

  const imagesBG = {
    "50n": "bg-[url('/images/background/mist.jpg')]",
    "50d": 'bg-[url("/images/background/mist.jpg")]',
    "01d": 'bg-[url("/images/background/clearSky.jpg")]',
    "02d": 'bg-[url("/images/background/fewClouds.jpg")]',
    "03d": 'bg-[url("/images/background/scatteredClouds.jpg")]',
    "04d": 'bg-[url("/images/background/brokenClouds.jpg")]',
    "09d": 'bg-[url("/images/background/showerRain.jpg")]',
    "10d": 'bg-[url("/images/background/rain.jpg")]',
    "11d": 'bg-[url("/images/background/thunderstrom.jpg")]',
    "13d": 'bg-[url("/images/background/snow.jpg")]',
    "13n": 'bg-[url("/images/background/snow.jpg")]',
    "01n": 'bg-[url("/images/background/clearSky.jpg")]',
    "02n": 'bg-[url("/images/background/fewClouds.jpg")]',
    "03n": 'bg-[url("/images/background/scatteredClouds.jpg")]',
    "04n": 'bg-[url("/images/background/brokenClouds.jpg")]',
    "09n": 'bg-[url("/images/background/showerRain.jpg")]',
    "10n": 'bg-[url("/images/background/rain.jpg")]',
    "11n": 'bg-[url("/images/background/thunderstrom.jpg")]',
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(succes);
  }, []);

  return (
    <main
      // style={{
      //   backgroundImage: `url${imagesBG[weatherInfo?.weather[0].icon]}`,
      // }}
      className={`bg-black  bg-cover bg-center lightgra text-black min-h-screen font-lato flex  flex-col justify-center  items-center px-4  ${
        imagesBG[weatherInfo?.weather[0].icon]
      }`}
    >
      <Weather weatherInfo={weatherInfo} />
    </main>
  );
}

export default App;
