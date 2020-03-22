import React, { useState, useEffect } from "react";
import "./TodoForm.css";

const TodoForm = props => {
  return (
    <div className="form">
      <input
        onKeyDown={e => (e.keyCode === 13 ? props.addToDo() : null)}
        type="text"
        placeholder="Add todos..."
      />
      <div className="btn-group">
        <div className="btn-container">
          <button
            className="btn btn-add"
            onClick={e => {
              e.preventDefault();
              props.addToDo();
            }}
          >
            Add Todo
          </button>
        </div>
        <div className="btn-container">
          {props.todos.length > 0 ? (
            <button className="btn btn-remove" onClick={props.removeTodos}>
              Clean up Todos
            </button>
          ) : null}
        </div>
      </div>
      {props.todos.length > 0 ? (
        <input
          onChange={props.filterList}
          className="search-input"
          placeholder="Search todos..."
          // onChange={props.search}
          type="search"
        />
      ) : null}
    </div>
  );
};

export default TodoForm;
