//This wrapper is for testimonial and productcategory
import React from "react";
import classes from "./Card.module.css";
const Card = (props) => {
  if (props.divWrapper) {
    return (
      <div className={`${props.className} ${classes.wrapper}`}>
        {props.children}
      </div>
    );
  } else {
    return (
      <li className={`${props.className} ${classes.wrapper}`}>
        {props.children}
      </li>
    );
  }
};
export default Card;
