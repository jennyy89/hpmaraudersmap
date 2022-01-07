import React from "react";
import "./FootSteps.css";

export default function FootSteps({ char }) {
  console.log(char);
  return (
    <section>
      {char.map((steps, index) => (
        <div key={index} className="footsteps footsteps-{steps.id}">
          <div className="footstep left" />
          <div className="footstep right" />
          <div className="scroll-name">
            <h1>{steps.name}</h1>
          </div>
        </div>
      ))}
    </section>
  );
}
