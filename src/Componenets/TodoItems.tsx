import React from "react";
import classes from "./TodoItems.module.css";


const TodoItems: React.FC<{
  item: string;
  id: string;
  removeItem: (event: React.MouseEvent) => void;
}> = (props) => {

  return (
    <li
      onClick={props.removeItem}
      className={classes.item}
      style={{ fontFamily: "sans-serif" }}
    >
      <h2>{props.item}</h2>
    </li>
    // <li
    //   onClick={props.removeItem}
    //   className={classes.item}
    //   style={{ fontFamily: "sans-serif" }}
    // >
    //   <h2>{props.item}</h2>
    // </li>
  );
};

export default TodoItems;
