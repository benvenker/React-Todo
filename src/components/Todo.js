import React from "react";
import "./Todo.css";
const Todo = props => {
  // console.log("Todo props:  ", props);
  return (
    <div className="todo-item">
      <div
        className={`todo ` + props.completed ? "completed" : ""}
        onClick={e => props.markCompleted(e, props.id)}
        task={props.task}
      >
        {props.task}
      </div>
    </div>
  );
};

export default Todo;
