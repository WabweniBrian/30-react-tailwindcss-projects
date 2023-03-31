import React from "react";
import { Provider } from "react-redux";
import store from "./app/store";
import TodoApp from "./TodoApp";

const Index = () => {
  return (
    <Provider store={store}>
      <div className=" bg-slate-100 dark:bg-slate-800">
        <TodoApp />
      </div>
    </Provider>
  );
};

export default Index;
