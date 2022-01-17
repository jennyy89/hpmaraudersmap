import "./AltApp.css";
import MongoCharacters from "./MongoCharacters";
// import App from "./App";
import ClosedMap from "./ClosedMap";
import OpenMap from "./OpenMap";
import Footsteps from "./Steps";
import useMongo from "./useMongo";
import Card2 from "./Card2";
import { useEffect, useState } from "react";

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
    </>
  );
}

export default AltApp;
