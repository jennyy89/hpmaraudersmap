import React from "react";

import './Steps.css'
import footsteps from './img/footsteps.png'


export default function Steps({person,handleDisplay,index}) {
    console.log(Steps.prpos)
    const RandomNum = () => {
        return (Math.floor(Math.random() * (100 ) ))
    }
    const Angle = (y, x) => { 
        if(x>0)return Math.atan( y / x)
        return (Math.PI + Math.atan( y / x))
    }
    const AngleCss = (y,x) => {
        const offset = Math.PI / 2 - .4  
        return  offset - Angle(y,x)
    }
    const position = [RandomNum(),RandomNum(),RandomNum(),RandomNum(),RandomNum(),RandomNum()]
    const CSSVar ={
        "--x1":position[0]+'%',
        "--x2":position[1]+'%',
        "--x3":position[2]+'%',
        "--y1":position[3]+'%',
        "--y2":position[4]+'%',
        "--y3":position[5]+'%',
        "--v1":AngleCss(-(position[4]-position[3]),position[1]-position[0])+ 'rad',
        "--v2":AngleCss(-(position[5]-position[4]),position[2]-position[1])+ 'rad',
        "--v3":AngleCss(-(position[3]-position[5]),position[0]-position[2])+ 'rad',
        "--t1":RandomNum()*1/10+30+'s',
        "--t2":RandomNum()*2/100+'s',
    }
    return (
        <>
            {/* <div className='container' > */}
                <img 
                    className="footSteps" 
                    src={footsteps} 
                    alt="footsteps" 
                    width='33' 
                    style={CSSVar}/>
                <div 
                    className="nameTag" 
                    style={CSSVar} 
                    onClick={() => { handleDisplay(index)}}>
                    {person.name}
                </div>
            {/* </div>   */}
        </>
    )
}

