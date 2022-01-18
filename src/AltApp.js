import "./AltApp.css";
import ClosedMap from "./ClosedMap";
import OpenMap from "./OpenMap";
import { useState } from "react";

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

  const delay = 1500;

  const [isOpen, setIsOpen] = useState(false);

  const [isMapvisible, setIsMapvisible] = useState(false);

  const openMap = () => {
    if (isOpen) {
      setIsOpen(false);
      setIsMapvisible(false);
    } else {
      setIsOpen(true);
      setTimeout(() => {
        setIsMapvisible(true);
      }, delay);
      console.log(isOpen);
    }
  };

  const styleleft = {
    transform: !isOpen ? "skewY(0deg)" : "skewY(25deg)",
    transition: !isOpen ? "all 0s ease-out" : "all 2s ease-in-out",
  };

  const styleright = {
    transform: !isOpen ? "skewY(0deg)" : "skewY(-16deg)",
    transition: !isOpen ? "all 0s ease-out" : "all 2s ease-in-out",
  };

  return (
    <div className="backgr">
      <div className="intro">
        <h1 className="headline">Welcome to the Harry Potter World</h1>
        <button className="openB" onClick={openMap}>
          Open/Close Map
        </button>

        {isMapvisible ? (
          <OpenMap />
        ) : (
          <ClosedMap style={{ styleleft, styleright }} />
        )}
      </div>
    </div>
  );
}

export default AltApp;
