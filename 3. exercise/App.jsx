import React, { useState } from "react";
import axios from "axios";

const API_ICON_BASE_URL = "http://openweathermap.org/img/wn/";
const API_DATA_BASE_URL = "http://api.openweathermap.org/data/2.5/weather";
const API_KEY = ""; // Place your API key here

function App() {
  /**
   * The states of the app.
   *
   * - city: The value of the input bar.
   * - data: The data that is returned from the API.
   * - error: The error that is returned from the API.
   */
  const [city, setCity] = useState("");
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  /**
   * Fetch the OpenWeatherMap API.
   * Saves the response into the 'data' state variable.
   *
   * Make sure you follow its documentation since it is very important that you
   * understand the structure of both the query you need to send and the data
   * you will receive.
   *
   * 'async' and 'await' make the function non-blocking, since requesting data
   * from an API might take some time.
   */
  async function fetchAPI() {
    /**
     * When working with Axios, you can chain various function calls together.
     * For example: 'axios.get().then().then().catch()'.
     */
    await axios

      /**
       * Send a HTTP GET request to the modified URL. If you are confused on
       * what that means, you should do a little research on what HTTP requests
       * are.
       *
       * - You need to create an account on OpenWeatherMap to get a KEY that you
       * need to insert on the URL.
       * - We decided to use 'metric' units to get ºC instead of ºF. Maybe you
       * can add a button that toggles the type of units for the user.
       */
      .get(API_DATA_BASE_URL + `?q=${city}&units=metric&appid=${API_KEY}`)

      /**
       * .then() receives a callback function that is only executed when it
       * receives an OK response from the API.
       */
      .then((response) => {
        setData(response.data);
        setError(null);
      })

      /**
       * .catch() receives a callback function that is only executed when an
       * error occurs.
       *
       * It is entirely optional, but we used it anyway to show you how you
       * could do it yourself.
       */
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
            onChange={(e) => setCity(e.target.value)}
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
