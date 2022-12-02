import React from "react";
import classes from "./rank.module.css";

const Rank = () => {
  return (
    <div className={classes["rank-container"]}>
      <h2 className={classes["rank-title"]}>
        {"Luis your current rank ist ..."}
      </h2>
      <p className={classes["rank-rank"]}>
        <span className={`${classes["small"]} ${classes["mr-0-2"]} `}>#</span>
        {"5"}
      </p>
    </div>
  );
};
export default Rank;
