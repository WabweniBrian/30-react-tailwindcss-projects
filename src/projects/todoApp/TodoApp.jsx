import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Alert from "./components/Alert";
import Filters from "./components/Filters";
import Footer from "./components/Footer";
import TodoList from "./components/TodoList";
import { addUpdateTodo, filterToggleTodos } from "./features/todoSlice";
import { toggleTheme } from "./features/themeSlice";

const TodoApp = () => {
  const [todoText, setTodoText] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [editID, setEditId] = useState("");
  const [status, setStatus] = useState("all");
  const { filteredTodos, todos } = useSelector((state) => state.todo);
  const { darkMode } = useSelector((state) => state.theme);
  const dispatch = useDispatch();

  const newTodoState = {
    todos: {
      id: new Date().getTime().toString(),
      todoText,
      isCompleted: false,
    },
    editID,
    isEditing,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addUpdateTodo(newTodoState));
    setEditId(null);
    setIsEditing(false);
    setTodoText("");
  };

  const editTodo = (id) => {
    const todoEdited = filteredTodos.find((todo) => todo.id === id);
    setEditId(todoEdited.id);
    setIsEditing(true);
    setTodoText(todoEdited.todoText);
  };

  useEffect(() => {
    localStorage.setItem("redux-todos-frontendmentor", JSON.stringify(todos));
    dispatch(filterToggleTodos(status));
  }, [todos, dispatch, status]);

  useEffect(() => {
    localStorage.setItem("redux-todos-theme", JSON.stringify(darkMode));
  }, [darkMode]);

  return (
    <main className={darkMode && "dark"}>
      <div className="min-h-screen bg-darkBlueLight dark:bg-darkBlue">
        <div className="h-[200px] bg-imageSmLight dark:bg-imageSmDark md:bg-imageLgLight md:dark:bg-imageLgDark bg-cover bg-no-repeat"></div>
        <Alert />
        <div className="max-w-[420px] rounded-md w-[95%] -mt-28 mx-auto">
          <div className="top-nav flex-center-between px-4 text-white">
            <h1 className="text-2xl">TODO</h1>
            <div className="icon cursor-pointer">
              <i
                className={`${
                  darkMode ? "feather-sun" : "feather-moon"
                }  text-xl`}
                onClick={() => dispatch(toggleTheme())}
              ></i>
            </div>
          </div>
          {/* Form */}
          <form onSubmit={handleSubmit}>
            <div className="input-with-icon mt-2 border-none h-10 bg-darkDesaturatedBlueLight dark:bg-darkDesaturatedBlue rounded-md shadow-normal">
              <span className="w-5 h-5 border border-veryDarkGrayishBlueLight dark:border-veryDarkGrayishBlue rounded-full ml-4 pr-2"></span>
              <input
                className="form-control bg-darkDesaturatedBlueLight dark:bg-darkDesaturatedBlue border-none text-lightGrayishBlueLight  dark:text-lightGrayishBlue placeholder:text-lightGrayishBlue"
                placeholder="Create a new todo"
                value={todoText}
                onChange={(e) => setTodoText(e.target.value)}
              />
            </div>
          </form>
          {/* Todo List */}
          <div className="relative rounded-md bg-darkDesaturatedBlueLight dark:bg-darkDesaturatedBlue shadow-normal">
            <TodoList editTodo={editTodo} />
            <Filters setStatus={setStatus} />
          </div>
        </div>
        <Footer />
      </div>
    </main>
  );
};

export default TodoApp;
