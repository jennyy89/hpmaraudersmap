import React from "react";

export default function ClosedMap({ style }) {
  return (
    <>
      <div className="sectionWrap">
        <img
          src="https://meowlivia.s3.us-east-2.amazonaws.com/codepen/map/1.png"
          alt=""
          style={style.styleleft}
        />

        <img
          src="https://meowlivia.s3.us-east-2.amazonaws.com/codepen/map/17.png"
          alt=""
          style={style.styleright}
        />
      </div>
    </>
  );
}
