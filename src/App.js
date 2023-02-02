import "./App.css";
import axios from "axios";

function App() {
  const header = {
    headers: {
      "X-Parse-Application-Id": "tjuNVNNcLoRdi9trjBbqnPirqFKxugjwgTDDhrQP",
      "X-Parse-REST-API-Key": "GQhLehqMOEz16w4uUnZUVCM9ssl46odDLYO344as",
    },
  };

  axios
    .get("https://parseapi.back4app.com/classes/KonexioStudent", header)
    .then((res) => console.log(res.data.results));

  return <div className="App"></div>;
}

export default App;
