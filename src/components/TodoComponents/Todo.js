import React from "react";

const Todo = props => {
  return (
    <div
      onClick={props.onClick}
      className={`task${props.task.completed ? " completed" : ""}`}
    >
      <h3>{props.task.task}</h3>
    </div>
  );
};

export default Todo;
