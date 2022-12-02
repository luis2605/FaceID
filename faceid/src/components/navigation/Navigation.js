import React from "react";
import classes from "./navigation.module.css";

const Navigation = () => {
  return (
    <nav className={classes["nav-container"]}>
      <h1 className={classes["nav-title"]}>A programm to check faces ... </h1>

      <div className={classes["glitch-wrapper"]}>
        <div className={classes["glitch"]} data-glitch="glitch">
          Sign In
        </div>

        <div className={classes["glitch"]} data-glitch="glitch">
          Sign Out
        </div>
      </div>
    </nav>
  );
};
export default Navigation;
