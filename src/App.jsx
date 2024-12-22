import { useEffect, useRef, useState } from "react";
import "./index.css";
import Axios from "axios";

const API = "cb3f1ee833e94dc491a205816242112";

function App() {
  const [temp, setTemp] = useState();
  const [city, setCity] = useState();
  const [condition, setCondition] = useState();
  const [wind, setWind] = useState();
  const [time, setTime] = useState();
  const [humidity, setHumidity] = useState();
  const [gust, setGust] = useState();

  const inputRef = useRef("");

  useEffect(() => {
    Axios.get(
      `https://api.weatherapi.com/v1/current.json?key=${API}&q=Cairo&aqi=yes
  `
    ).then((res) => {
      const a = res.data;
      const city = a.location.name;
      const temp = a.current.temp_c;
      const condition = a.current.condition.text;
      const wind = a.current.wind_kph;
      const time = a.location.localtime;
      const humidity = a.current.humidity;
      const gust = a.current.gust_kph;

      setCity(city);
      setTemp(temp);
      setCondition(condition);
      setWind(wind);
      setTime(time);
      setHumidity(humidity);
      setGust(gust);

      inputRef.current.focus();
    });
  }, []);

  const handleSearch = () => {
    Axios.get(
      `https://api.weatherapi.com/v1/current.json?key=${API}&q=${inputRef.current.value}&aqi=yes
`
    ).then((res) => {
      const a = res.data;
      const city = a.location.name;
      const temp = a.current.temp_c;
      const condition = a.current.condition.text;
      const wind = a.current.wind_kph;
      const time = a.location.localtime;
      const humidity = a.humidity;
      const gust = a.gust;

      setCity(city);
      setTemp(temp);
      setCondition(condition);
      setWind(wind);
      setTime(time);
      setHumidity(humidity);
      setGust(gust);
    });
  };

  return (
    <div className="bg-zinc-500 h-screen w-screen pt-20 flex flex-col relative">
      <div className="bg-stone-400 flex justify-center h-1/2 w-4/6 mx-auto rounded-3xl cursor-default hover:scale-[101%] duration-500 transition hover:shadow-2xl relative">
        <div className="p-4  w-full h-full">
          <div className="flex mx-auto justify-between">
            <h3 className="">{city}</h3>
            <h3 className="">{time}</h3>
          </div>

          <div className=" flex justify-center items-center mt-10 flex-col">
            <span className="text-4xl font-light">{temp}°C</span>
            <span className="text-xs opacity-80">{condition}</span>
          </div>

          <div className=" flex mt-10">
            <div className="flex flex-col justify-start font-medium">
              <h1 className="flex flex-row items-center space-x-2">
                <img src="/assets/wind-speed.png" className=" scale-50 h-10" />
                {wind}km/h
              </h1>
              <span className="flex flex-row items-center space-x-2">
                <img src="/assets/humidity.png" className="scale-50 w-10" />
                {humidity}%
              </span>
              <span className="flex flex-row items-center space-x-2">
                <img src="/assets/sun-svg.png" className="scale-50 w-10" />
                {gust}h
              </span>
            </div>

            <div className="flex justify-end flex-right w-full">
              {temp >= 20 ? (
                <img src="/assets/sun.png" className="w-36" />
              ) : temp >= 5 ? (
                <img src="/assets/cloudy.png" className="w-36" />
              ) : temp >= 5 && condition == "Mist" ? (
                <img src="/assets/fog.png" className="w-36" />
              ) : temp >= 5 && condition == "Patchy rain nearby" ? (
                <img src="/assets/patchy.png" className="w-36" />
              ) : (temp >= 5 && condition == "Overcast") ||
                condition == "Partly Cloudy" ? (
                <img src="/assets/cloudy.png" className="w-36" />
              ) : (
                <img src="/assets/snow-storm.png" className="w-36" />
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center top-20 relative">
        <div className="flex justify-between">
          <input
            placeholder="City Name"
            onKeyDown={(e) => (e.key === "Enter" ? handleSearch() : null)}
            ref={inputRef}
            className="rounded-lg outline-none font-medium px-3 py-[1.5px] scale-125 duration-300 w-40 focus:w-48"
          />
          <button
            onClick={handleSearch}
            className="relative  font-semibold bg-stone-400 rounded-lg py-1 px-2 ml-3 hover:bg-stone-300 duration-400 hover:scale-[105%] transition  hover:shadow-lg "
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
