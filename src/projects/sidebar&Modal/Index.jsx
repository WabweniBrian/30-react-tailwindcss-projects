import React from "react";
import Sidebar from "./components/Sidebar";
import Modal from "./components/Modal";
import Home from "./components/Home";
import AppProvider from "./contexts/SidebarModalContext";

const Index = () => {
  return (
    <AppProvider>
      <Home />
      <Sidebar />
      <Modal />
    </AppProvider>
  );
};

export default Index;
