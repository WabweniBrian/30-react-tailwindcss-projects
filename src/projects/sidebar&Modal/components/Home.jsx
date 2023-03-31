import React from "react";
import { useContext } from "react";
import { sidebarModalContext } from "../contexts/SidebarModalContext";

const Home = () => {
  const { dispatch } = useContext(sidebarModalContext);

  return (
    <main className="min-h-screen">
      <div className="p-6">
        <button
          className="sidebar-toggle rounded-lg hover:bg-slate-100 px-2 py-1"
          onClick={() => dispatch({ type: "OPEN_SIDEBAR" })}
        >
          <i className="feather-menu text-3xl text-teal-500"></i>
        </button>
      </div>

      <div className="flex-center-center min-h-[80vh]">
        <button
          className="px-6 py-2 bg-teal-500 text-white capitalize rounded-md hover:bg-teal-600"
          onClick={() => dispatch({ type: "OPEN_MODAL" })}
        >
          Show modal
        </button>
      </div>
    </main>
  );
};

export default Home;
