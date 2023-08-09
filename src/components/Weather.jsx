import { useState } from "react";

const Weather = ({ weatherInfo }) => {
  const [isCelsius, setIsCelsius] = useState(true);
  const temUrl = weatherInfo?.main.temp;

  const kelvinToCelsius = (tempKelvin) => {
    const celcius = 273.15;
    return (tempKelvin - celcius).toFixed(1);
  };
  const kelvinToFahrenheit = (tempKelvin) => {
    let temp = (9 * tempKelvin) / 5 + 32;
    return temp.toFixed(1);
  };
  const handleChangeUnitTemp = () => {
    setIsCelsius(!isCelsius);
  };
  const resultTempConversion = isCelsius
    ? `${kelvinToCelsius(temUrl)} ° C`
    : ` ${kelvinToFahrenheit(temUrl)}  °F`;
  return (
    <section className="text-center  ">
      <h2 className="text-3xl text-center m-3">{weatherInfo?.name}</h2>
      <section className="grid  gap-4 sm:grid-cols-[auto_auto]">
        {/* seccion superior */}
        <section className="bg-white/30 p-2 py-4 rounded-3xl grid gap-2 items-center align-center justify-center  ">
          <h4 className="text-center text-3xl col-span-2 mt-2">
            {weatherInfo?.weather[0].description}
          </h4>
          <span className="text-6xl text-center  ">
            {resultTempConversion}{" "}
          </span>
          <div className="w-[90px] ">
            <img
              src={`https://openweathermap.org/img/wn/${weatherInfo?.weather[0].icon}@4x.png`}
              alt=""
            />
          </div>
        </section>
        {/*seccion inferior  */}
        <section className="bg-white/60  p-2 py-4 rounded-2xl  grid grid-cols-3 items-center align-center justify-center sm:grid-cols-1 ">
          <article className="flex gap-2 items-center  ">
            <div className=" w-[20px]">
              <img src={"/images/wind.png"} alt="" />
            </div>
            <span>{weatherInfo?.wind.speed}m/s</span>
          </article>

          <article className="flex gap-2 items-center align-center  ">
            <div className=" w-[20px]">
              <img src={"/images/humidity.png"} alt="" />
            </div>
            <span>{weatherInfo?.main.humidity}%</span>
          </article>

          <article className="flex gap-2 items-center mr-2">
            <div className=" w-[20px]">
              <img src={"/images/pressure.png"} alt="" />
            </div>
            <span>{weatherInfo?.main.pressure} hPa</span>
          </article>
        </section>
      </section>
      <button
        onClick={handleChangeUnitTemp}
        className="bg-white text-blue-700 mt-3 rounded-3xl px-3 text-xl w-[151px] h-[34px] shadow-lg shadow-slate-500/50"
      >
        {isCelsius ? "switch to °F" : "switch to °C"}
      </button>
    </section>
  );
};
export default Weather;
