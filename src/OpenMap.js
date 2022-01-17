import React from "react";
import "./OpenMap.css";
import Footsteps from "./Steps";
import useMongo from "./useMongo";
import Card2 from "./Card2";
import { useEffect, useState } from "react";
import MongoCharacters from "./MongoCharacters";

export default function OpenMap() {
  const { people, totalPeeps, load, add, del, edit } = useMongo();
  const [isClicked, setIsClicked] = useState([false]);

  useEffect(() => {
    load();
  }, []);
  useEffect(() => {
    const newArray = new Array(totalPeeps).fill(false);
    setIsClicked(newArray);
  }, [totalPeeps]);

  const handleDisplay = (index) => {
    setIsClicked(
      isClicked.map((value, counter) => (counter === index ? !value : false))
    );
  };

  const handleDelete = () => {};
  const info = [1, 2, 3];
  const newPut = [1, 2, 3];
  return (
    <div className="openmapwrap">
      {/* <div className="back"> */}
      <div className="map-side front sectionWap">
        <img
          src="https://meowlivia.s3.us-east-2.amazonaws.com/codepen/map/6.png"
          alt=""
        />
      </div>
      {/* </div> */}
      <div className="middle">
        <div className="map-side front sectionWap">
          <img
            src="https://meowlivia.s3.us-east-2.amazonaws.com/codepen/map/7.png"
            alt=""
          />
        </div>
      </div>
      {/* <div className="right"> */}
      <div className="map-side front sectionWap">
        <img
          src="https://meowlivia.s3.us-east-2.amazonaws.com/codepen/map/8.png"
          alt=""
        />
        {/* </div> */}
      </div>
      <div className="map-side front sectionWap">
        <img
          src="https://meowlivia.s3.us-east-2.amazonaws.com/codepen/map/9.png"
          alt=""
        />
      </div>
      <div className="map-base sectionWap">
        <img
          src="https://meowlivia.s3.us-east-2.amazonaws.com/codepen/map/18.png"
          alt=""
        />
      </div>
      <div className="map-side front sectionWap">
        <img
          src="https://meowlivia.s3.us-east-2.amazonaws.com/codepen/map/10.png"
          alt=""
        />
      </div>
      <div className="map-side front sectionWap">
        <img
          src="https://meowlivia.s3.us-east-2.amazonaws.com/codepen/map/11.png"
          alt=""
        />
      </div>
      ;
      <div className="containerSteps">
        {people.map((person, index) => {
          return (
            <Footsteps
              person={person}
              handleDisplay={handleDisplay}
              index={index}
              key={index}
            />
          );
        })}
      </div>
      {isClicked.map((value, index) => {
        return (
          value && (
            <Card2
              handleDisplay={handleDisplay}
              character={people[index]}
              index={index}
              handleDelete={del}
              edit={edit}
              info={info}
              newPut={newPut}
              key={index}
            />
          )
        );
      })}
      <MongoCharacters />
    </div>
  );
}
