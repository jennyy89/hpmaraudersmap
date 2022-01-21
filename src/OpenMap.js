import { useEffect, useState, useCallback } from "react";
import useMongo from "./useMongo";

import Footsteps from "./Steps";
import Card2 from "./Card2";
import MongoCharacters from "./MongoCharacters";
import RenderOpenMap from "./RenderOpenMap";

import "./OpenMap.css";

export default function OpenMap() {
  const { people, totalPeeps, load, del, edit } = useMongo();
  const [isClicked, setIsClicked] = useState([false]);
  const [isAdd, setIsAdd] = useState(false);

  useEffect(() => {
    load();
  }, [,isAdd]);
  
  useEffect(() => {
    const newArray = new Array(totalPeeps).fill(false);
    setIsClicked(newArray);
  }, [totalPeeps]);

  const handlerCreator = (index) => {
    return () => {
        setIsClicked(people.map((x, iterator)=> iterator === index ? true : false ));
    }};
  const preDisplay = people.map( (x,index)=> handlerCreator(index) );
  const handleDisplay= useCallback(preDisplay, [people]);
  
  const handleClose = useCallback(() => {
    const newArray = new Array(totalPeeps).fill(false);
    setIsClicked(newArray);
    }, []);

  const addHandler = () => {
    setIsAdd(!isAdd);
  };

  return (
    <div className="containerSteps openmapwrap">
      
      <RenderOpenMap />

      { totalPeeps &&
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

      { isClicked.map((value, index) => {
        return (
          value && (
            <Card2
              handleDisplay={handleClose}
              character={people[index]}
              index={index}
              handleDelete={del}
              edit={edit}
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
 // const preDisplay = new Array(totalPeeps);
  // for (let i = 0; i < 15; i++) {
  //   preDisplay[i] = useCallback(handlerCreator(i), []);
  // }
  // const handleDisplay = useCallback(preDisplay, []);



  // const handlerCreator = (index) => {
  //   return () => {
  //     const newArray = new Array(totalPeeps).fill(false);
  //     newArray[index] = true;
  //     setIsClicked(newArray);
  //   };
  // };
  // const preDisplay = new Array(totalPeeps);
  // for (let i = 0; i < totalPeeps ; i++) {
  //   preDisplay[i] = handlerCreator(i);
  //   }
  // const handleDisplay = useCallback(preDisplay, [totalPeeps]);
  // console.log(handleDisplay2, handleDisplay)