import React, { useState } from "react";
import axios from "axios";

const API_ICON_BASE_URL = "http://openweathermap.org/img/wn/";
const API_DATA_BASE_URL = "http://api.openweathermap.org/data/2.5/weather";
const API_KEY = "e2d09fee3d5b9ea0d5db4e2a8ec2e272";

function App() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [city, setCity] = useState("");
  const handleChange = (e) => setCity(e.target.value);

  /**
   * Fetch the weather API.
   * Saves the response into the 'data' state variable.
   *
   * 'async' and 'await' make the function non-blocking,
   * since requesting data from an API might take some time.
   */
  async function fetchAPI() {
    await axios
      .get(API_DATA_BASE_URL + `?q=${city}&units=metric&appid=${API_KEY}`)
      .then((response) => {
        setData(response.data);
        setError(null);
      })
      .catch((error) => setError(error));
  }

  return (
    <div className="App">
      <header>
        <h2>Weather App</h2>
      </header>

      <main>
        {
          // Display the weather information
          data && (
            <div style={{ display: "flex", alignItems: "center" }}>
              <img
                src={API_ICON_BASE_URL + `${data.weather[0].icon}.png`}
                alt={data.weather[0].main}
              />
              <div>
                <strong>{data.weather[0].main}</strong>
                <br />
                {data.main.feels_like} ºC
              </div>
            </div>
          )
        }

        {
          // Display an error message if there is one
          error && (
            <div>
              <strong>Error:</strong> {error.message}
            </div>
          )
        }

        {/* The input query */}
        <div>
          <input
            type="text"
            name="city"
            placeholder="Porto"
            value={city}
            onChange={handleChange}
          />
          <button type="submit" onClick={fetchAPI}>
            Search
          </button>
        </div>
      </main>
    </div>
  );
}

export default App;
