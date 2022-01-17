import "./AltApp.css";
import MongoCharacters from "./MongoCharacters";
import App from "./App";
import React, { useState } from "react";
import ClosedMap from "./ClosedMap";
import OpenMap from "./OpenMap";

function AltApp() {
  // ========= Elephant Api  =======
  // const apiData = "http://localhost:3007/api/characters";
  // const [characters, setCharacters] = useState([]);
  // useEffect(() => {
  //   getData();
  // }, []);

  // const getData = async () => {
  //   try {
  //     const results = await axios.get(apiData);
  //     setCharacters(results.data);
  //     console.log(results.data);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  const [isOpen, setIsOpen] = useState(false);
  const openMap = () => {
    isOpen ? setIsOpen(false) : setIsOpen(true);
    console.log(isOpen);
  };

  // function toggleMap() {
  //   setIsOpen(isOpen);
  // }
  return (
    <>
      <div className="intro">
        <h1 className="headline">Welcome to the Harry Potter World</h1>
        {/* 
    <div className="main-content" onClick={toggleMap}>
      <div className={isOpen ? "map-base active" : "map-base"}></div>
    </div> */}
        {/* <section className={isOpen ? "map-base active" : "map-base"}> */}
        <button className="openB" onClick={openMap}>
          Open/Close Map
        </button>
        {isOpen ? <OpenMap /> : <ClosedMap />}

        {/* </section> */}
      </div>
    </>
  );
}

export default AltApp;
