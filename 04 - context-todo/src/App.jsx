import classNames from "classnames";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faCheck, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

import Todo from "./components/Todo";

export default function App() {
  const [inputValue, setInputValue] = useState("");
  const [formError, setFormError] = useState(false);
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("todos")) || []
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    const formValue = inputValue.trim();

    if (!formValue) {
      setFormError(true);
      return;
    }

    setTodos((prevTodos) => {
      prevTodos.push({
        checked: false,
        text: formValue,
        id: prevTodos.length,
      });

      localStorage.setItem("todos", JSON.stringify(prevTodos));

      return prevTodos;
    });

    setInputValue("");
  };

  const handleInputChange = (e) => {
    setFormError(false);
    setInputValue(e.target.value);
  };

  const toggleComplete = (id) => {
    const currentTodos = [...todos];

    const targetTodo = currentTodos.find((todo) => todo.id === id);

    targetTodo.checked = !targetTodo.checked;

    currentTodos.splice(id, 1, targetTodo);

    localStorage.setItem("todos", JSON.stringify(currentTodos));

    setTodos(currentTodos);
  };

  const removeTodo = (id) => {
    const currentTodos = [...todos];

    const updatedTodos = currentTodos.filter((todo) => todo.id !== id);

    localStorage.setItem("todos", JSON.stringify(updatedTodos));

    setTodos(updatedTodos);
  };

  let pendingTodos = <div className="ml-4 text-sm">All tasks done</div>;
  let completedTodos = <div className="ml-4 text-sm">No tasks completed</div>;

  if (todos.some((todo) => !todo.checked)) {
    pendingTodos = todos
      .filter((todo) => !todo.checked)
      .reverse()
      .map((todo) => (
        <Todo
          key={todo.id}
          {...todo}
          onToggleComplete={toggleComplete}
          onRemoveTodo={removeTodo}
        />
      ));
  }

  if (todos.some((todo) => todo.checked)) {
    completedTodos = todos
      .filter((todo) => todo.checked)
      .reverse()
      .map((todo) => (
        <Todo
          key={todo.id}
          {...todo}
          onToggleComplete={toggleComplete}
          onRemoveTodo={removeTodo}
        />
      ));
  }

  return (
    <div className="bg-[#7AB8E1] py-10 min-h-screen flex text-sm sm:text-base px-5 sm:px-10 items-center justify-center">
      <div className="py-10 px-5 sm:px-10 bg-[#312F58] w-full md:w-1/2 xl:w-1/3 rounded-lg flex flex-col">
        <form onSubmit={handleSubmit}>
          <label
            className={classNames([
              "bg-[#27264D] px-1 pl-4 py-1 rounded-full text-white flex gap-2 items-center",
              formError && "border-red-400 border-2",
            ])}
          >
            <input
              type="text"
              name="text"
              className="flex-1 text-sm bg-transparent focus:outline-none"
              onChange={handleInputChange}
              value={inputValue}
            />
            <button className="text-xl sm:text-3xl font-bold bg-[#3276A6] p-1 sm:p-2 flex items-center justify-center rounded-full">
              <FontAwesomeIcon
                icon={faPlus}
                className="h-5 w-5 cursor-pointer"
              />
            </button>
          </label>
        </form>
        <div className="mt-10 text-white">
          <h3>TO DO</h3>
          <div className="mt-3 space-y-2">{pendingTodos}</div>
        </div>
        <div className="mt-10 text-white">
          <h3>COMPLETED</h3>
          <div className="mt-3 space-y-2">{completedTodos}</div>
        </div>
      </div>
    </div>
  );
}
