import React from "react";
import classes from "./container.module.css";

const FormPhotoContainer = (props) => {
  return <div className={classes["formPhoto-container"]}>{props.children}</div>;
};

export default FormPhotoContainer;
