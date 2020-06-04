import React from "react";
import "./App.css";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import store from "store";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      initialTodos: [
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
      ],
      todos: [],
      searchResults: [],
      searchTerm: ""
    };
  }

  componentDidMount() {
    const results = this.state.todos.filter(todo => {
      return todo.task
        .toLowerCase()
        .includes(this.state.searchTerm.toLowerCase());
    });
    this.setState({ todos: results });
  }

  addToDo = () => {
    const input = document.querySelector("input");
    console.log(input.value);
    if (input.value !== "") {
      const id = new Date().getTime();

      store.set(id, { task: input.value, completed: false });

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
    }
    input.value = "";
  };

  markCompleted = (event, todoId) => {
    // console.log("todoId: ", todoId);
    const todo = event.target;
    todo.classList.toggle("completed");
    todo.style.textDecoration === ""
      ? (todo.style.textDecoration = "line-through")
      : (todo.style.textDecoration = "");

    this.setState({
      todos: this.state.todos.map(todo => {
        // console.log("todo.id: ", todo.id);
        if (todo.id === todoId) {
          // console.log("match");
          return {
            ...todo,
            completed: !todo.completed
          };
        }
        return todo;
      })
    });
  };

  removeTodos = () => {
    this.setState({
      todos: this.state.todos.filter(todo => todo.completed === false)
    });
  };

  search = e => {
    console.log(e.target.value);
    this.setState({ searchTerm: e.target.value });

    const results = this.state.todos.filter(todo => {
      return todo.task
        .toLowerCase()
        .includes(this.state.searchTerm.toLowerCase());
    });
    this.setState({ todos: results });
  };

  filterList = event => {};

  render() {
    // console.log("state: ", this.state);
    const { todos } = this.state;
    return (
      <div className="app">
        {/* <h2>Welcome to your Todo App!</h2> */}
        <TodoForm
          filterList={this.filterList}
          search={this.search}
          addToDo={this.addToDo}
          removeTodos={this.removeTodos}
          todos={todos}
        />
        <TodoList todos={todos} markCompleted={this.markCompleted} />
      </div>
    );
  }
}

export default App;
