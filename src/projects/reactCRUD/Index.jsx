import React from "react";
import UsersProvider from "./context/UsersContext";
import Home from "./Home";

const Index = () => {
  return (
    <UsersProvider>
      <Home />
    </UsersProvider>
  );
};

export default Index;
