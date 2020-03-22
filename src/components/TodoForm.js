import React from "react";

const TodoForm = props => {
  return (
    <div>
      <input
        onKeyDown={e => (e.keyCode === 13 ? props.addToDo() : null)}
        type="text"
      />
      <button onClick={props.addToDo}>Add Todo</button>
      <button onClick={props.removeTodos}>Remove Todo</button>
    </div>
  );
};

export default TodoForm;
