/* eslint-disable no-restricted-globals */
import { useUsersContext } from "../context/UsersContext";
import ImagePlaceholder from "../coverphoto.png";
import { app, database, storage } from "../../../firebaseConfig";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  onSnapshot,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { useRef } from "react";
import {
  ref,
  uploadBytesResumable,
  getDownloadURL,
  deleteObject,
} from "firebase/storage";
import { actionTypes } from "../reducer/UsersReducer";

const Form = () => {
  const [user, setUser] = useState({ name: "", email: "", phone: "" });
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);
  const [imageURL, setImageURL] = useState("");
  const { dispatch } = useUsersContext();
  const imageInput = useRef(null);
  const [image, setImage] = useState("");

  const handleEdit = ({ user }) => {
    setIsEditing(true);
    setEditId(user.id);
    setUser(user);
  };

  const collectionRef = collection(database, "users");

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  // Add/Update Users-----------------------------------------------------------------------------------------------------
  const addUpdateUser = () => {
    if (isEditing) {
      const docToUpdate = doc(collectionRef, editId);
      updateDoc(docToUpdate, {
        ...user,
      })
        .then(() => {
          console.log("User updated successfully");
        })
        .catch((err) => {
          console.log(err.message);
        });
    } else {
      addDoc(collectionRef, {
        ...user,
        image: imageURL,
      })
        .then(() => {
          console.log("User added successfully");
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
    setUser({
      fname: "",
      lname: "",
      email: "",
      position: "",
      image: "",
      age: "",
    });
    setIsEditing(false);
    setEditId("");
  };

  // Get Users ----------------------------------------------------------------------------------------------------------
  const getUsers = () => {
    onSnapshot(collectionRef, ({ docs }) => {
      dispatch({
        type: actionTypes.getUsers,
        payload: docs.map((user) => {
          return { ...user.data(), id: user.id };
        }),
      });
    });
  };

  useEffect(() => {
    getUsers();
  }, []);

  //Delete users---------------------------------------------------------------------------------------------------------
  const deleteUser = (id) => {
    const docToDelete = doc(collectionRef, id);
    if (!confirm("Are you sure you want to delete this user")) return;
    deleteDoc(docToDelete)
      .then(() => {
        console.log("User deleted successfully");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  //Image  Upload---------------------------------------------------------------------------------------------------------
  const uploadImage = () => {
    if (image) {
      // Create a reference to the image
      const imageRef = ref(storage, image.name);

      const uploadTask = uploadBytesResumable(imageRef, image);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          //   Get the upload progress
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
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
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setImageURL(downloadURL);
            console.log("File available at", downloadURL);
          });
        }
      );
    } else {
      alert("Select an image to upload");
    }
  };

  return (
    <div className="pt-14">
      <h1 className="text-3xl font-bold text-center">Add Users</h1>
      <div className="bg-white rounded-lg my-4 p-4 shadow-light border-light">
        <form onSubmit={addUpdateUser}>
          <input
            type="file"
            hidden
            ref={imageInput}
            onChange={(e) => setImage(e.target.files[0])}
          />
          <img
            src={image ? URL.createObjectURL(image) : ImagePlaceholder}
            alt=""
            className="w-12 h-12 cursor-pointer object-cover rounded-full mx-auto"
            onClick={() => imageInput.current.click()}
          />
          <div className="flex-center-center gap-4 mt-3 sm:mt-6 flex-wrap sm:flex-nowrap">
            <div className="form-input  w-full sm:w-fit relative">
              <input
                type="text"
                name="name"
                className="input"
                required
                value={user.name}
                onChange={handleChange}
              />
              <label htmlFor="name">Name</label>
            </div>
            <div className="form-input w-full sm:w-fit relative">
              <input
                type="text"
                name="email"
                className="input"
                required
                value={user.email}
                onChange={handleChange}
              />
              <label htmlFor="email">Email Address</label>
            </div>
            <div className="form-input w-full sm:w-fit relative">
              <input
                type="number"
                name="phone"
                className="input"
                required
                value={user.phone}
                onChange={handleChange}
              />
              <label htmlFor="phone">Phone</label>
            </div>
          </div>

          <div className="flex-center-center">
            <button
              className={`capitalize text-white hover:bg-blue-700 px-6 py-2  transition-a ${
                isEditing ? "bg-green-600" : "bg-blue-600"
              }`}
            >
              {isEditing ? "update" : "add"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
