import React, { useState } from "react";
import "./Map.css";

export default function Map() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMap() {
    setIsOpen(isOpen);
  }
  return (
    <>
      <h1>Welcome to the Harry Potter World</h1>
      {/* 
      <div className="main-content" onClick={toggleMap}>
        <div className={isOpen ? "map-base active" : "map-base"}></div>
      </div> */}

      <button className="mapbtn">Open/Close Map</button>
    </>
  );
}
