import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
// import Character from "./Character";
import Characters from "./Characters";
import FootSteps from "./FootSteps";
import Map from "./Map";

function App() {
  const apiData = "http://localhost:3007/api/characters";

  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const results = await axios.get(apiData);
      setCharacters(results.data);
      console.log(results.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="App">
      {/* <Character /> */}
      <Map />
      <FootSteps char={characters} />
      <Characters char={characters} />
    </div>
  );
}

export default App;
