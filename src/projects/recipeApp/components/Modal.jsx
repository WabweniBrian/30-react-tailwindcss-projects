import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../features/modalMenuSlice";

const Modal = () => {
  const dispatch = useDispatch();
  const { isModalOpen, modalContent } = useSelector((state) => state.modal);

  const handleCloseModal = (e) => {
    if (e.target.classList.contains("modal")) {
      dispatch(closeModal());
    }
  };

  const { img, title, description, ingredients, procedures } = modalContent;

  return (
    <div
      className={`modal flex-center-center z-50 ${isModalOpen && "showModal"}`}
      onClick={handleCloseModal}
    >
      <div
        className={`modal-dialog max-w-[50rem] w-[90%] bg-white  -translate-y-[800px] p-4 transition-a h-[90vh] z-50 ${
          isModalOpen && "showModal"
        }`}
      >
        <div className="flex-center-between px-4 py-2 border-b">
          <h1 className="text-2xl capitalize text-green-600">{title}</h1>
          <i
            className="feather-delete cursor-pointer p-2 rounded-md hover:bg-slate-100"
            onClick={() => dispatch(closeModal())}
          ></i>
        </div>
        <div className="modal-body p-3 overflow-auto h-[90%]">
          <img src={img} alt="" className="w-full h-[200px] object-cover" />
          <h1 className="text-2xl font-bold my-4">Description</h1>
          <p className="text-sm text-slate-500">{description}</p>
          <h1 className="text-2xl font-bold my-4">Ingridients</h1>
          <ul className="list-disc">
            {ingredients?.map((ing, index) => {
              return (
                <li className="my-2 capitalize  ml-10" key={index}>
                  {ing}
                </li>
              );
            })}
          </ul>
          <h1 className="text-2xl font-bold my-4">Procedures</h1>
          <ul className="pb-4 list-decimal">
            {procedures?.map((procedure, index) => {
              return (
                <li className="my-4 capitalize  ml-10 text-sm" key={index}>
                  {procedure}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Modal;
