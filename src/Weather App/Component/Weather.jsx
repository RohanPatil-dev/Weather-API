import React, { useState } from "react";

import { cities } from "../API/API"
import "../CSS/weather.css"

export default function Weather() {

  const [value, setValue] = useState("");

  const [data, setData] = useState({
    city: "none",
    temperature: "none",
    condition: "none",
    image : "none"
  });

  //  type --> 1
  // async function API() {
  //  await cities.forEach((element) => {
  //     if (value === element.city) {
  //       console.log(typeof value);

  //       console.log(value);
  //       console.log(typeof(value));
  //       setData({ city: element.city, temperature: element.temperature, condition: element.condition });
  //     }
  //   });
  // }

  // type --> 2
  async function API() {
    const result = await cities.find((element) =>
      element.city === value
    );
    console.log(result);

    setData({ city: result.city, temperature: result.temperature, condition: result.condition,image : result.image });
  }

  function increment() {
    API();
  }

  return (
    <>
      <div className="grid-weather">
        <img src={data.image} alt="image not found !" id="img" />
          
        <div id="result">
        <p>City : {data.city}</p>
          <p>Temperature : {data.temperature}</p>
          <p>condition : {data.condition}{" "}</p>
        </div>


        <div className="weather-input">
          <label htmlFor="input">Search weather</label>
          <input
            type="text"
            id="input"
            placeholder="Enter your favorite city....."
            value={value}
            onChange={(event) => {
              setValue(event.target.value);
              console.log(event.target.value);
            }}
          />
        </div>

        <button className="btn btn-primary" onClick={increment}>Click Me</button>
      </div>
    </>
  );
}
