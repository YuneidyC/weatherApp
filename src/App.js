import { ApiContextProvider } from "./context/ApiContext";
import { CurrentWeather } from "./components/CurrentWeather"

function App() {
  return (
    <ApiContextProvider>
      <div className="App">
        <CurrentWeather/>
      </div>
    </ApiContextProvider>
  );
}

export default App;
