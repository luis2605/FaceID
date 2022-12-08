import React from "react";
import classes from "./imageLinkForm.module.css";

const ImageLinkForm = ({ onInputChange, onBtnSubmit }) => {
  return (
    <div className={classes["form-container"]}>
      <p className={classes["intro-text"]}>
        {"This App will detect Faces on the images you provide.Give it a try."}
      </p>
      <div className={classes["input-container"]}>
        <input
          id="input-field"
          onChange={onInputChange}
          type="text"
          placeholder="Place a URL here ..."
        ></input>
        <button onClick={onBtnSubmit} className={classes["btn"]}>
          Detect
        </button>
      </div>
    </div>
  );
};

export default ImageLinkForm;
