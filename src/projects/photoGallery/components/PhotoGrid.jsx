/* eslint-disable no-restricted-globals */
import React from "react";
import { db, storage } from "../../../firebaseConfig";
import { deleteObject, ref } from "firebase/storage";
import { collection, deleteDoc, doc } from "firebase/firestore";

const PhotoGrid = ({ photos }) => {
  const dbInstance = collection(db, "photos");

  // Delete image both from the database and server-----------------------------------------------------------------------------------------------------------
  const deleteImage = (image) => {
    const imageRef = ref(storage, image.image);
    const docToDelete = doc(dbInstance, image.id);
    if (!confirm("Are you sure you want to delete this user")) return;
    deleteObject(imageRef)
      .then(() => {
        console.log("Image deleted successfully");
      })
      .catch((error) => {
        console.log(error.message);
      });
    deleteDoc(docToDelete)
      .then(() => {
        console.log("Image deleted successfully");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return photos.length ? (
    <div className="px-4 grid grid-cols-minmax-uto gap-4 my-4">
      {photos.map((photo, index) => {
        const date = new Date(
          photo?.uploaded_at?.seconds * 1000 +
            photo?.uploaded_at?.nanoseconds / 1000000
        );
        return (
          <div
            className="image-box rounded-lg relative cursor-pointer overflow-hidden group"
            key={index}
          >
            <img
              src={photo.image}
              alt=""
              className="w-full h-[300px] group-hover:scale-150 transition-a object-cover"
            />
            <div className="image-info flex-center-between px-4 absolute w-full bottom-4 z-10">
              <div className="text-slate-200">
                <h1>
                  {photo?.name.length > 20
                    ? `${photo?.name.slice(0, 20)}...`
                    : photo?.name}
                </h1>
                <p>Uploaded on:</p>
                <span>{date.toLocaleString()}</span>
              </div>
              <div
                className="md:hidden md:group-hover:block"
                onClick={() => deleteImage(photo)}
              >
                <i className="feather-trash text-slate-200"></i>
              </div>
            </div>
            <div className="absolute w-full h-1/2 bottom-0 left-0 bg-gradient-to-t from-black to-transparent"></div>
          </div>
        );
      })}
    </div>
  ) : (
    <div className="min-h-[50vh] flex-center-center">
      <h1 className="text-4xl opacity-60">No Images</h1>
    </div>
  );
};

export default PhotoGrid;
