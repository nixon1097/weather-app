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
    <section className="text-center   ">
      <h2 className="text-3xl text-center m-3">{weatherInfo?.name}</h2>
      <section className="grid  gap-3 sm:grid-cols-[350px_auto]  ">
        {/* seccion superior */}
        <section className="bg-white/30 p-4 py-4 rounded-3xl grid gap-2 items-center align-center justify-center   ">
          <h4 className="text-center text-2xl col-span-2 mt-2 sm:text-[2rem] ">
            {weatherInfo?.weather[0].description}
          </h4>
          <span className="text-[46px] text-center  sm:text-[3.7rem] ">
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
        <section className="bg-white/30 text-[0.8rem] font-bold scale-y-110 mb-3 divide-x-2 py-2 divide-[#0000003B]  rounded-3xl  grid grid-cols-[1fr,1fr,1fr] sm:grid-cols-1 sm:p-3 sm:py-3 sm:scale-y-100 sm:w-[auto] sm:text-center sm:divide-x-0 sm:divide-y-2 sm:font-black sm:text-[1rem] sm:mb-0">
          <article className="flex   mr-4 items-center justify-center  py-1 px-1 sm:py-0 sm:justify-start sm:p-0 sm:mr-0 sm:px-0">
            <div className=" w-[1.15rem] ml-4 sm:w-[1.40rem] sm:ml-0 ">
              <img src={"/images/wind.png"} alt="" />
            </div>
            <span className="ml-2 sm:ml-2">{weatherInfo?.wind.speed}m/s</span>
          </article>

          <article className="flex items-center  justify-center sm:justify-start ">
            <div className=" w-[1.20rem] ml-1 sm:w-6 sm:ml-0 ">
              <img src={"/images/humidity.png"} alt="" />
            </div>
            <span className="ml-2 sm:ml-4 ">{weatherInfo?.main.humidity}%</span>
          </article>

          <article className="flex  items-center  justify-center  sm:justify-start">
            <div className=" w-[1.20rem] sm:w-[1.05rem">
              <img src={"/images/pressure.png"} alt="" />
            </div>
            <span className="ml-2 sm:ml-1 ">
              {weatherInfo?.main.pressure} hPa
            </span>
          </article>
        </section>
      </section>
      <button
        onClick={handleChangeUnitTemp}
        className="bg-white text-blue-700 mt-9 rounded-3xl px-3 text-xl w-[151px] h-[34px] shadow-lg shadow-slate-500/50  "
      >
        {isCelsius ? "switch to °F" : "switch to °C"}
      </button>
    </section>
  );
};
export default Weather;
