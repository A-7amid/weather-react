import Axios from "axios";
import React, { useEffect, useState } from "react";
// import Axios from "axios";

const API_KEY = "34b80d74b1e742a7a00a4bf6dc64eb81";

const Forecasts = ({ city, temp }) => {
  const [temp0, setTemp0] = useState();
  const [icon0, setIcon0] = useState();

  // useEffect(() => {
  //   Axios.get(
  //     `https://api.tomorrow.io/v4/weather/forecast?location=42.3478,-71.0466&apikey=ocIZ4JW7bPQVbI2J0ojaAmX8jjPQ9OCt`
  //   ).then((res) => {
  //     const icon = res.data[0].weather.icon;

  //     setIcon0(icon0);
  //   });
  // }, [city]);

  return (
    <div className="mt-44 text-black">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-10 mx-10">
        <div className="bg-slate-700 text-slate-200 font-bold uppercase gap-8 py-5 flex flex-col items-center justify-center rounded-3xl cursor-default hover:scale-[101%] duration-500 transition hover:shadow-2xl">
          <h3>monday</h3>

          <div>
            <img src="/assets/patchy.png" className="w-20 my-5" />
          </div>

          <div className="font-medium">
            <span>14.2°C</span>
          </div>
        </div>

        <div className="bg-slate-700 text-slate-200 font-bold uppercase gap-8 py-5 flex flex-col items-center justify-center rounded-3xl cursor-default hover:scale-[101%] duration-500 transition hover:shadow-2xl">
          <h3>Tuesday</h3>

          <div>
            <img src="/assets/cloudy.png" className="w-20 my-5" />
          </div>

          <div className="font-medium">
            <span>19.3°C</span>
          </div>
        </div>

        <div className="bg-slate-700 text-slate-200 font-bold uppercase gap-8 py-5 flex flex-col items-center justify-center rounded-3xl cursor-default hover:scale-[101%] duration-500 transition hover:shadow-2xl">
          <h3>Wednesday</h3>

          <div>
            <img src="/assets/overcast.png" className="w-20 my-5" />
          </div>

          <div className="font-medium">
            <span>7.9°C</span>
          </div>
        </div>

        <div className="bg-slate-700 text-slate-200 font-bold uppercase gap-8 py-5 flex flex-col items-center justify-center rounded-3xl cursor-default hover:scale-[101%] duration-500 transition hover:shadow-2xl">
          <h3>Thursday</h3>

          <div>
            <img src="/assets/overcast.png" className="w-20 my-5" />
          </div>

          <div className="font-medium">
            <span>8°C</span>
          </div>
        </div>

        <div className="bg-slate-700 text-slate-200 font-bold uppercase gap-8 py-5 flex flex-col items-center justify-center rounded-3xl cursor-default hover:scale-[101%] duration-500 transition hover:shadow-2xl">
          <h3>Friday</h3>

          <div>
            <img src="/assets/fog.png" className="w-20 my-5" />
          </div>

          <div className="font-medium">
            <span>16.7°C</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forecasts;
