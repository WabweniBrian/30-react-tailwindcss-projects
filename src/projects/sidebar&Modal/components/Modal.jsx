import React from "react";
import { useContext } from "react";
import { sidebarModalContext } from "../contexts/SidebarModalContext";

const Modal = () => {
  const { isModalOpen, dispatch } = useContext(sidebarModalContext);

  const handleCloseModal = (e) => {
    if (e.target.classList.contains("modal")) {
      dispatch({ type: "CLOSE_MODAL" });
    }
  };

  return (
    <div
      className={`modal flex-center-center ${isModalOpen && "showModal"}`}
      onClick={handleCloseModal}
    >
      <div
        className={`modal-dialog max-w-[25rem] w-[90%] bg-white  -translate-y-[800px] transition-a ${
          isModalOpen && "showModal"
        }`}
      >
        <div className="flex-center-between px-4 py-2 border-b">
          <h1 className="text-xl">Modal Header</h1>
          <i
            className="feather-delete cursor-pointer p-2 rounded-md hover:bg-slate-100"
            onClick={() => dispatch({ type: "CLOSE_MODAL" })}
          ></i>
        </div>
        <div className="p-3">
          <p className="text-sm text-slate-500">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut ipsa
            modi blanditiis aspernatur similique quidem recusandae! Amet facere
            necessitatibus commodi!
          </p>
          <div className="my-3 flex justify-end">
            <button
              className="px-6 py-1 bg-teal-500 text-white capitalize rounded-md hover:bg-teal-600"
              onClick={() => dispatch({ type: "CLOSE_MODAL" })}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
