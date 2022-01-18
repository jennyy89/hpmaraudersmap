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
    <div className="img_trans containerSteps openmapwrap">
      <img
        src="https://meowlivia.s3.us-east-2.amazonaws.com/codepen/map/6.png"
        alt=""
      />
      <img
        src="https://meowlivia.s3.us-east-2.amazonaws.com/codepen/map/7.png"
        alt=""
      />
      <img
        src="https://meowlivia.s3.us-east-2.amazonaws.com/codepen/map/8.png"
        alt=""
      />
      <img
        src="https://meowlivia.s3.us-east-2.amazonaws.com/codepen/map/9.png"
        alt=""
      />
      <img
        src="https://meowlivia.s3.us-east-2.amazonaws.com/codepen/map/18.png"
        alt=""
      />
      <img
        src="https://meowlivia.s3.us-east-2.amazonaws.com/codepen/map/10.png"
        alt=""
      />
      <img
        src="https://meowlivia.s3.us-east-2.amazonaws.com/codepen/map/11.png"
        alt=""
      />
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
