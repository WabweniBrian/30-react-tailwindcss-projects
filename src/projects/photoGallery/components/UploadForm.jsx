/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unreachable */
import React, { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";
import { app, db, storage } from "../../../firebaseConfig";
import {
  addDoc,
  collection,
  onSnapshot,
  serverTimestamp,
} from "firebase/firestore";
import {
  deleteObject,
  getDownloadURL,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { FiTrash } from "react-icons/fi";

const UploadForm = ({ isModalOpen, dispatch }) => {
  const imageInput = useRef(null);
  const [imageURL, setImageURL] = useState("");
  const [imageName, setImageName] = useState("");
  const [hideProgressWrapper, sethideProgressWrapper] = useState(true);
  const [uploading, setUploading] = useState(false);

  const [percentage, setPercentage] = useState(0);
  const progressRef = useRef();
  const imageRef = useRef();

  const handleCloseModal = (e) => {
    if (e.target.classList.contains("modal")) {
      dispatch({ type: "CLOSE_MODAL" });
    }
  };

  const dbInstance = collection(db, "photos");

  // Upload Image-----------------------------------------------------------------------------------------------------------
  const uploadImage = (e) => {
    setUploading(true);
    // Create a reference to the image
    const storageRef = ref(storage, e.target.files[0].name);
    const uploadTask = uploadBytesResumable(storageRef, e.target.files[0]);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        //   Get the upload progress
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setPercentage(progress.toFixed(0));
        sethideProgressWrapper(false);
        progressRef.current.style.width = `${progress}%`;
      },
      (error) => {
        // Handle unsuccessful uploads
        console.log(error.message);
      },
      () => {
        // Handle successful uploads on complete and get the download url
        sethideProgressWrapper(true);
        setUploading(false);
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setImageURL(downloadURL);
          console.log("File available at", downloadURL);
        });
      }
    );
  };

  // Get Image-----------------------------------------------------------------------------------------------------------
  const getImages = () => {
    onSnapshot(dbInstance, ({ docs }) => {
      dispatch({
        type: "GET_PHOTOS",
        payload: docs.map((image) => {
          return { ...image.data(), id: image.id };
        }),
      });
    });
  };

  useEffect(() => {
    getImages();
  }, []);

  // Add Image files to the database -----------------------------------------------------------------------------------------------------------
  const addImage = (e) => {
    e.preventDefault();
    if (imageName) {
      addDoc(dbInstance, {
        name: imageName,
        image: imageURL,
        uploaded_at: serverTimestamp(),
      })
        .then(() => {
          console.log("Image added successfully");
        })
        .catch((err) => {
          console.log(err.message);
        });
      setImageName("");
      dispatch({ type: "CLOSE_MODAL" });
      setImageURL("");
      imageRef.current.src = "/images/coverphoto.png";
    } else {
      alert("Provide all the fields");
    }
  };

  // Delete Image-----------------------------------------------------------------------------------------------------------
  const deleteImage = (image) => {
    const imageRef = ref(storage, image);
    setImageURL("");
    deleteObject(imageRef)
      .then(() => {
        console.log("Image deleted successfully");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div
      className={`modal flex-center-center backdrop-blur-sm ${
        isModalOpen && "showModal"
      }`}
      onClick={handleCloseModal}
    >
      <div
        className={`modal-dialog max-w-[25rem] rounded-lg w-[90%] text-gray-200 bg-gray-900 -translate-y-[800px] transition-a ${
          isModalOpen && "showModal"
        }`}
      >
        <div className="flex-center-between px-4 py-2 border-b border-slate-600">
          <h1 className="text-xl">Modal Header</h1>
          <i
            className="feather-delete cursor-pointer p-2 rounded-md hover:bg-gray-600"
            onClick={() => dispatch({ type: "CLOSE_MODAL" })}
          ></i>
        </div>
        <div className="p-3">
          <form onSubmit={addImage}>
            <div className="relative h-[38px]">
              <i className="feather-image absolute text-[#444c79] top-[0.7rem] left-2"></i>
              <input
                type="text"
                placeholder="Image name.."
                className="bg-[#1f2947] border-none outline-none h-full w-full top-0 px-8 rounded-md shadow-normal"
                value={imageName}
                onChange={(e) => setImageName(e.target.value)}
              />
              <input
                type="file"
                hidden
                ref={imageInput}
                onChange={uploadImage}
              />
            </div>
            <div className="relative">
              <img
                src={`${imageURL ? imageURL : "/images/coverphoto.png"}`}
                alt=""
                className={`w-full h-[200px] my-4 cursor-pointer object-cover ${
                  uploading && "opacity-40 pointer-events-none"
                }`}
                onClick={() => imageInput.current.click()}
                ref={imageRef}
              />
              <div
                className={`absolute bottom-2 right-2 bg-red-500 text-white h-8 w-8 rounded-full sm:cursor-pointer hidden place-items-center ${
                  imageURL && "!grid"
                }`}
                onClick={() => deleteImage(imageURL)}
              >
                <FiTrash />
              </div>

              <div
                className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hidden ${
                  uploading && "!block"
                }`}
              >
                <div className="loader"></div>
              </div>
            </div>
            <div
              className={`flex-center-between ${
                hideProgressWrapper && "!hidden"
              }`}
            >
              <div className="progressbar w-full h-1 bg-gray-500 rounded-full overflow-hidden">
                <div className="bg-blue-500 h-full" ref={progressRef}></div>
              </div>
              <p className="ml-2">{percentage}%</p>
            </div>

            <div className="my-3 flex justify-center">
              <button
                className="px-6 py-1 bg-gray-600 capitalize rounded-md hover:bg-gray-700"
                onClick={() => dispatch({ type: "CLOSE_MODAL" })}
              >
                <i className="feather-upload"></i>
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UploadForm;
