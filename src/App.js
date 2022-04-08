

// import styles from "./App.module.css";

import Info from "./components/info";
// import { createSignal } from "solid-js";
// import TodosCompleted from "./components/TodosCompleted";
// import Nav from "./components/Nav";
// import { TodosProvider } from "./TodosProvider";
// import { Switch, Match } from "solid-js";
import { render } from "solid-js/web";
import { For } from "solid-js";
//import { createStore } from "solid-js/store";
//import { render } from "solid-js/web";
import { createSignal } from "solid-js";

const App = () => {
  const [todos, setTodos] = createSignal([]);
  let input;
  let todoId = 0;

  const addTodo = (text) => {
    const [completed, setCompleted] = createSignal(false);
    const [textOfTodo, setTextOfTodo] = createSignal(text);

    // Stopped here
    //change text to textOfTodo
    setTodos([...todos(), { id: 1, text, completed, setCompleted }]);
  };
  const toggleTodo = (id) => {
    console.log("toggle called");
    const index = todos().findIndex((t) => t.id === id);
    const todo = todos()[index];
    console.log("selected todo", todo);
    if (todo) todo.setCompleted(!todo.completed());
  };
  //attach toggletodos to state
  //setTodos(toggleTodo);
  return (
    <>
      <div>
        <input ref={input} />
        <button
          onClick={(e) => {
            if (!input.value.trim()) return;
            addTodo(input.value);
            input.value = "";
            console.log(todos());
          }}
        >
          Add Todo
        </button>
      </div>

      <For each={todos()}>
        {(todo) => {
          const { id, text } = todo;
          console.log(`Creating ${text}`);
          console.log("toggleTodo", { toggleTodo });
          //replace with info tag
          return (
            <>
              <Info
                inputText={todo.text}
                toggleTodo={toggleTodo}
                id={todo.id}
              ></Info>
            </>
          );
        }}
      </For>
    </>
  );
};

//render(App, document.getElementById("app"));

export default App;

//ToDo:
//Debugg and fix todo completion
//separte state in a separte file
//clean console.log
//test reactivity using nested store and passing a leaf to a child
//inline editing
