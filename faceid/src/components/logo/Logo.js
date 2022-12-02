import React from "react";
import classes from "./logo.module.css";
import Tilt from "react-parallax-tilt";
import icon from "../../assets/img/icons8-anonymous-mask-100.png";

const Logo = () => {
  return (
    <div className={classes["logo-container"]}>
      <Tilt>
        <div className={classes["icon-container"]}>
          {" "}
          <img className={classes["icon"]} src={icon} alt="icon" />
          <h1 className={classes["title"]}>FaceID</h1>
        </div>
      </Tilt>
    </div>
  );
};
export default Logo;
