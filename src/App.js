import React from "react";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [
        {
          task: "Organize Garage",
          id: 1528817077286,
          completed: false
        },
        {
          task: "Bake Cookies",
          id: 1528817084358,
          completed: false
        }
      ]
    };
  }

  addToDo = () => {
    const input = document.querySelector("input");
    console.log(input.value);
    this.setState({
      todos: [
        ...this.state.todos,
        {
          task: input.value,
          id: new Date().getTime(),
          completed: false
        }
      ]
    });
    input.value = "";
  };

  markCompleted = (event, todoId) => {
    console.log("todoId: ", todoId);
    const todo = event.target;
    todo.classList.toggle("completed");

    todo.style.textDecoration === ""
      ? (todo.style.textDecoration = "line-through")
      : (todo.style.textDecoration = "");

    this.setState({
      todos: this.state.todos.map(todo => {
        console.log("todo.id: ", todo.id);
        if (todo.id === todoId) {
          console.log("match");
          return {
            ...todo,
            completed: !todo.completed
          };
        }
        return todo;
      })
    });
    console.log(this);
  };

  removeTodos = event => {
    this.setState({
      todos: this.state.todos.filter(todo => todo.completed === false)
    });
  };

  render() {
    console.log("state: ", this.state);
    const { todos } = this.state;
    // const { markCompleted } = this.markCompleted;
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList todos={todos} markCompleted={this.markCompleted} />
        <TodoForm addToDo={this.addToDo} removeTodos={this.removeTodos} />
      </div>
    );
  }
}

export default App;
