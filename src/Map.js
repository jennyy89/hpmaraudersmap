import React from "react";
import "./Map.css";

export default function Map() {
  return (
    <>
      <h1>Welcome to the Harry Potter World</h1>

      <div className="main-content">
        <div className="map-base">
          <div className="footsteps footsteps-1">
            <div className="footstep footstep-left"></div>
            <div className="footstep footstep-left"></div>
            <div className="scroll-name"></div>
            <p>Harry Potter</p>
          </div>
          <div className="footsteps footsteps-2">
            <div className="footstep footstep-left"> </div>
            <div className="footstep footstep-left"></div>
            <div className="scroll-name"></div>
            <p>Severus Snape</p>
          </div>
          <div className="map-flap flap-1">
            <div className="map-flap__front"></div>
            <div className="map-flap__back"></div>
          </div>
          <div className="map-flap flap-2">
            <div className="map-flap__front"></div>
            <div className="map-flap__back"></div>
          </div>
          <div className="map-side side-1">
            <img
              className="front-side-1"
              url="https://meowlivia.s3.us-east-2.amazonaws.com/codepen/map/8.png"
              alt=""
            />
            <div className="back"></div>
          </div>
          <div className="map-side side-2">
            <img
              className="front"
              url="https://meowlivia.s3.us-east-2.amazonaws.com/codepen/map/18.png"
              alt=""
            />
            <div className="back"></div>
          </div>
          <div className="map-side side-3">
            <img
              className="front"
              url="https://meowlivia.s3.us-east-2.amazonaws.com/codepen/map/7.png"
              alt=""
            />
            <div className="back"></div>
          </div>
          <div className="map-side side-4">
            <img
              className="front"
              url="https://meowlivia.s3.us-east-2.amazonaws.com/codepen/map/10.png"
              alt=""
            />
            <div className="back"></div>
          </div>
          <div className="map-side side-5">
            <img
              className="front"
              url="https://meowlivia.s3.us-east-2.amazonaws.com/codepen/map/6.png"
              alt=""
            />
            <div className="back"></div>
          </div>
          <div className="map-side side-6">
            <img
              className="front"
              url="https://meowlivia.s3.us-east-2.amazonaws.com/codepen/map/11.png"
              alt=""
            />
            <div className="back"></div>
          </div>
        </div>
      </div>

      <button className="mapbtn">Open/Close Map</button>
    </>
  );
}
