// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";
import Todo from "./Todo";
import store from "store";

const TodoList = props => {
  console.log("todo list props: ", props);
  return props.todos.map((todo, i) => (
    <Todo
      key={todo.id}
      markCompleted={props.markCompleted}
      id={todo.id}
      task={todo.task}
    />
  ));
  // return store.each((value, key) => (
  //   <Todo
  //     key={value.id}
  //     markCompleted={props.markCompleted}
  //     id={value.id}
  //     task={value.task}
  //   />
  // ));
};

export default TodoList;
