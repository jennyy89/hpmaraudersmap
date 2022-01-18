import "./AltApp.css";
import ClosedMap from "./ClosedMap";
import OpenMap from "./OpenMap";
import { useState } from "react";

function AltApp() {

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
  <>
    <h1 className="headline">Welcome to the Harry Potter World</h1>
    <button className="openB" onClick={openMap}>
      {isMapvisible?`Close`:`Open`} Map
    </button>

    {isMapvisible ? 
      <OpenMap /> : 
      <ClosedMap style={{ styleleft, styleright }} />
    }
  </>
);
}

export default AltApp;
