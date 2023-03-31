import React from "react";
import { FaCheck } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { markTodoASComplete, removeTodo } from "../features/todoSlice";

const TodoList = ({ editTodo }) => {
  const { filteredTodos, todos } = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  return (
    <ul className="todos rounded-md mt-4 text-lightGrayishBlueLight dark:text-lightGrayishBlue pb-4 bg-darkDesaturatedBlueLight dark:bg-darkDesaturatedBlue overflow-hidden">
      {filteredTodos.map((todo) => {
        const { todoText, id, isCompleted } = todo;
        return (
          <li
            className={`flex-center-between bg-darkDesaturatedBlueLight dark:bg-darkDesaturatedBlue py-4 px-0 cursor-pointer select-none ${
              isCompleted && "completed"
            }`}
            key={id}
          >
            <div className="todo-check flex-align-center gap-2 ml-2">
              <span
                className="check-circle w-5 h-5 rounded-full grid place-items-center cursor-pointer border border-veryDarkGrayishBlueLight dark:border-veryDarkGrayishBlue"
                onClick={() => dispatch(markTodoASComplete(id))}
              >
                <FaCheck className="icon text-white hidden text-[0.6rem]" />
              </span>
              <span className="todo-text hover:ml-[0.3rem] transition-a">
                {todoText}
              </span>
            </div>
            <div className="mr-2">
              <i
                className="feather-edit mr-2 opacity-80"
                onClick={() => editTodo(id)}
              ></i>
              <i
                className="feather-delete opacity-80"
                onClick={() => dispatch(removeTodo(id))}
              ></i>
            </div>
          </li>
        );
      })}
      {todos.length <= 0 && (
        <h1 className="text-center pt-2 opacity-60 text-veryDarkGrayishBlueLight">
          No Todos! Add Some
        </h1>
      )}
    </ul>
  );
};

export default TodoList;
