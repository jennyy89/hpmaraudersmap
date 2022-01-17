import "./App.css";
import "./AltApp.css";

import {useEffect, useState} from 'react';

import MongoCharacters from "./MongoCharacters";
import Footsteps from "./Steps";
import Map from "./Map";
import useMongo from './useMongo';
import Card2 from './Card2'

function AltApp() {
const {people, totalPeeps, load, add, del, edit} = useMongo();
const [isClicked,setIsClicked] = useState([false]);

useEffect(() => {load()}, [])
useEffect(() => {
  const newArray = new Array(totalPeeps).fill(false)
  setIsClicked(newArray)
  }
  , [totalPeeps])

const handleDisplay = (index) => {
    setIsClicked(isClicked.map((value, counter )=>(counter === index ? !value : false)))
}

const handleDelete= () => {
  
}
const info=[1,2,3] 
const newPut=[1,2,3]


  return (
    
    <div className="App">
      <Map/>
      <div className="containerSteps">
        {people.map((person,index) => {
          return <Footsteps 
                    person={person} 
                    handleDisplay={handleDisplay}
                    index={index} 
                    key={index} 
                  />
        })}
      </div>
      {isClicked.map((value,index) => {
        return (value && <Card2 
                            handleDisplay={handleDisplay}
                            character={people[index]} 
                            index={index} 
                            handleDelete={del} 
                            edit={edit} 
                            info={info} 
                            newPut={newPut}
                            key={index}
                            />)
      })}
      <MongoCharacters/>
    </div>
  );
}

export default AltApp;
