import {memo} from 'react'

import useRandomPosition from './Position'
import "./Steps.css";
import footsteps from "./img/footsteps.png";

const  Steps = memo( ({person, index, handleDisplay}) => {

  const {position} = useRandomPosition()
  const CSSVar = position()

  return (
    <>
      <img
        className="footSteps"
        src={footsteps}
        alt="footsteps"
        width="33"
        style={CSSVar}
      />
      <div
        className="nameTag"
        style={CSSVar}
        onClick={handleDisplay[index]}
      >
        {person.name}
      </div>
    </>
  );
}
)

export default Steps;