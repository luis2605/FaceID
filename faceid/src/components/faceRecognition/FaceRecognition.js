import React, { useState, useEffect } from "react";
import classes from "./face.module.css";

const FaceRecognition = ({ onBoxesCalculated, onInput }) => {
  console.log(onBoxesCalculated);

  const [showBoxes, setShowBoxes] = useState(false);
  const [boxes, setBoxes] = useState();

  useEffect(() => {
    if (onBoxesCalculated.length > 0) {
      setShowBoxes((prev) => {
        return (prev = true);
      });

      const definitionsMap = onBoxesCalculated.map((definition) => {
        return definition.definition;
      });

      console.log(definitionsMap);
      //mapping on the border props
      const boxesBoundaries = onBoxesCalculated.map((box) => {
        return (
          <div
            className={classes["bounding-box"]}
            style={{
              top: box.topRow,
              right: box.rightCol,
              bottom: box.bottomRow,
              left: box.leftCol,
            }}
          >
            <p className={classes["img-tags"]}>{box.definition}</p>
          </div>
        );
      });
      //assigning the boxes to state for using them
      setBoxes((prev) => {
        return (prev = boxesBoundaries);
      });
    }
  }, [onBoxesCalculated]);

  return (
    <div className={classes["photo-container"]}>
      <img
        style={
          {
            // width: "600px",
            // height: "500px",
          }
        }
        id="inputImage"
        className={classes["url-img"]}
        src={onInput}
        alt=""
      ></img>

      <div className={classes["definitions-box"]}>{showBoxes && boxes}</div>
    </div>
  );
};
export default FaceRecognition;
