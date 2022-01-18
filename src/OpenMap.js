import React from "react";
import "./OpenMap.css";
import Footsteps from "./Steps";
import useMongo from "./useMongo";
import Card2 from "./Card2";
import { useEffect, useState, useCallback } from "react";
import MongoCharacters from "./MongoCharacters";
import Card from "./Card";

export default function OpenMap() {
  const { people, totalPeeps, load, add, del, edit } = useMongo();
  const [isClicked, setIsClicked] = useState([false]);
  const [isAdd, setIsAdd] = useState(false);

  const info = ["name", "image", "ancestry", "house", "dateOfBirth"];
  const newPut = {
    name: "",
    image: "",
    ancestry: "",
    house: "",
    dateOfBirth: "",
  };

  useEffect(() => {
    load();
  }, [, isAdd]);
  useEffect(() => {
    const newArray = new Array(totalPeeps).fill(false);
    setIsClicked(newArray);
  }, [totalPeeps]);

  const handlerCreator = (index) => {
    return () => {
      const newArray = new Array(totalPeeps).fill(false);
      newArray[index] = true;
      setIsClicked(newArray);
    };
  };
  const preDisplay = new Array(totalPeeps);
  for (let i = 0; i < 15; i++) {
    preDisplay[i] = useCallback(handlerCreator(i), []);
  }
  const handleDisplay = useCallback(preDisplay, []);

  const handleClose = useCallback((index) => {
    console.log("Dentro Close");
    const newArray = new Array(totalPeeps).fill(false);
    setIsClicked(newArray);
  }, []);

  const addHandler = () => {
    setIsAdd(!isAdd);
  };

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
      {totalPeeps &&
        people.map((person, index) => {
          return (
            <Footsteps
              person={person}
              key={index}
              index={index}
              handleDisplay={handleDisplay}
              isAdd={isAdd}
            />
          );
        })}

      {isClicked.map((value, index) => {
        return (
          value && (
            <Card2
              handleDisplay={handleClose}
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
      <MongoCharacters addHandler={addHandler} />
    </div>
  );
}

// Please Dont erase yet
// const Dis0 = useCallback(
//   () => {
//     console.log('adentro de Dis1')

//   const newArray = new Array(totalPeeps).fill(false);
//   newArray[0]=true;
//   setIsClicked(newArray);
//   },[ ])
//   const Dis1 = useCallback(
//     () => {
//     const newArray = new Array(totalPeeps).fill(false);
//     newArray[1]=true;
//     setIsClicked(newArray);
//     },[ ])
//  const handleDisplay = useCallback(
//   (index) => {
//   const array= isClicked.map((value, counter) => (counter === index ? !value : false))
//   setIsClicked(array);
//   },[ isClicked ])
// Version of handlerCreator with map that forsome weird reason doesnt work.
// const handler = (index) => {
//     const array= isClicked.map((value, counter) => (counter === index ? !value : false))
//     setIsClicked(array);
//     }
//const arrayHandler = [useCallback( handler,[isClicked]), handler]
