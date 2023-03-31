import React from "react";
import { Provider } from "react-redux";
import store from "./app/store";
import Home from "./components/Home";

const Index = () => {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
};

export default Index;
