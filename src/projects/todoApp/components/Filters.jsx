import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCompletedTodos } from "../features/todoSlice";

const Filters = ({ setStatus }) => {
  const { todos } = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  return (
    <div className="text-darkGrayishBlueLight dark:text-darkGrayishBlue flex-center-between px-4 py-1 sm:border-t border-veryDarkGrayishBlueLight dark:border-veryDarkGrayishBlue">
      <div className="left">
        <span className="items-left">{todos.length} todos</span>
      </div>
      <div className="flex align-center gap-3 absolute -bottom-12 rounded-md bg-darkDesaturatedBlueLight dark:bg-darkDesaturatedBlue w-full left-0 py-[0.5rem] px-[0.8rem] justify-center shadow-normal sm:relative sm:shadow-none sm:bottom-0 !sm:p-0 sm:w-0">
        <span
          className="active cursor-pointer allTodos"
          onClick={() => setStatus("all")}
        >
          All
        </span>
        <span
          className="cursor-pointer activeTodos"
          onClick={() => setStatus("active")}
        >
          Active
        </span>
        <span
          className="cursor-pointer completedTodos"
          onClick={() => setStatus("completed")}
        >
          Completed
        </span>
      </div>
      <div className="clear">
        <span
          className="cursor-pointer text-red-500"
          onClick={() => dispatch(clearCompletedTodos())}
        >
          Clear completed
        </span>
      </div>
    </div>
  );
};

export default Filters;
