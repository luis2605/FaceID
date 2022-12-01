import React from "react";
import classes from "./imageLinkForm.module.css";

const ImageLinkForm = () => {
  return (
    <div className={classes["form-container"]}>
      <p className={classes["intro-text"]}>
        {"This App will detect Faces on the images you provide.Give it a try"}
      </p>
      <div className={classes["input-container"]}>
        <input type="text"></input>
        <button>Detect</button>
      </div>
    </div>
  );
};

export default ImageLinkForm;
