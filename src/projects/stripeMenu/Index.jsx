import React from "react";
import AppProvider from "./contexts/context";
import Home from "./Home";

const Index = () => {
  return (
    <AppProvider>
      <Home />
    </AppProvider>
  );
};

export default Index;
