import Axios from "axios";
import { useState } from "react";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";



function App() {
  const [data, setData] = useState({});
  const [input, setInput] = useState("");
  // const client = new QueryClient();

  const url = `http://api.openweathermap.org/data/2.5/weather?q=${input}&units=imperial&appid=6571d543a8e83027c55ddb7b1f1616af`;
  const shareData=(event)=>{
    if(event.key==="Enter"){
      Axios.get(url).then((res)=>{
        setData(res.data)
      })
    }
  }
  return (
    <div className="app">
      <div className="app">
        <div className="search">
          <input
            type="text"
            placeholder="EnterPlace"
            value={input}
            onKeyPress={shareData}
            onChange={(event) => {
              setInput(event.target.value);
            }}
          />
        </div>
        <div className="container">
          <div className="top">
            <div className="location">
              <p>{data.name}</p>
            </div>
            <div className="temp">
              <h1>
                {data.main ? <h1>{data.main.temp.toFixed()}°F</h1> : null}
              </h1>
            </div>
            <div className="description">
              {data.weather ? <p>{data.weather[0].main}</p> : null}
            </div>
          </div>

          {data.name !== undefined && (
            <div className="bottom">
              <div className="feels">
                {data.main ? (
                  <p className="bold">{data.main.feels_like.toFixed()}°F</p>
                ) : null}
                <p>feels like</p>
              </div>
              <div className="humidity">
                {data.main ? (
                  <p className="bold">{data.main.humidity}</p>
                ) : null}
                <p>humidity</p>
              </div>
              <div className="wind">
                {data.wind ? (
                  <p className="bold">{data.wind.speed.toFixed()}MPH</p>
                ) : null}
                <p>Wind speed</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
