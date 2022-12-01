import React from "react";
import classes from "./navigation.module.css";

const Navigation = () => {
  return (
    <nav className={classes["nav-container"]}>
      <p className={classes["btn"]}>Sign Out</p>
    </nav>
  );
};
export default Navigation;
