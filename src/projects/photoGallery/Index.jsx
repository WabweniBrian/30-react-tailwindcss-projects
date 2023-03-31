import React, { useReducer } from "react";
import PhotoGrid from "./components/PhotoGrid";
import UploadForm from "./components/UploadForm";
import { reducer } from "./reducer";

const initialState = {
  isModalOpen: false,
  photos: [],
};
const Index = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const { isModalOpen, photos } = state;

  return (
    <div className="min-h-screen flex items-center flex-col bg-gray-900 pt-6">
      <div className="max-w-[900px] w-[90%] mx-auto rounded-lg bg-gray-800 shadow-normal overflow-hidden">
        <UploadForm isModalOpen={isModalOpen} dispatch={dispatch} />
        <div className="text-center bg-gray-700 p-4">
          <img src="/images/logo.png" alt="" className="w-32 mx-auto" />
          <h1 className="text-3xl heading text-gray-300">WABPHOTO</h1>
          <button
            className="px-5 py-1 bg-gray-500 text-white mt-4 rounded-md capitalize hover:bg-gray-600 transition-a"
            onClick={() => dispatch({ type: "OPEN_MODAL" })}
          >
            <i className="feather-image mr-2"></i>
            upload photo
          </button>
        </div>

        <PhotoGrid photos={photos} />
      </div>
    </div>
  );
};

export default Index;
