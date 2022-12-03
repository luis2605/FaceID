import React from "react";
import classes from "./face.module.css";

const FaceRecognition = ({ onBoxesCalculated, onBoxes, onInput }) => {
  console.log(onBoxes);
  console.log(onBoxesCalculated);
  return (
    <div>
      <img
        id="inputImage"
        className={classes["url-img"]}
        src={onInput}
        alt=""
      ></img>
    </div>
  );
};
export default FaceRecognition;
