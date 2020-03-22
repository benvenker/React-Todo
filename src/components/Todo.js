import React from "react";

const Todo = props => {
  console.log("Todo props:  ", props);
  return (
    <div
      className={props.completed ? "completed" : ""}
      onClick={e => props.markCompleted(e, props.id)}
      task={props.task}
    >
      {props.task}
    </div>
  );
};

export default Todo;
