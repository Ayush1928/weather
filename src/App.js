import "./App.css";
import Home from "./Components/Home";
import WeatherState from "./Components/WeatherState";
function App() {
  return (
    <WeatherState>
      <div className="app">
        <Home />
      </div>
    </WeatherState>
  );
}

export default App;
