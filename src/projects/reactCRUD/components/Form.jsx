import React, { useRef } from "react";
import { useState } from "react";
import { useUsersContext } from "../context/UsersContext";
import ImagePlaceholder from "../coverphoto.png";

const Form = ({
  user,
  setUser,
  isEditing,
  setIsEditing,
  setEditId,
  editId,
}) => {
  const { dispatch } = useUsersContext();
  const imageInput = useRef(null);
  const [image, setImage] = useState("");

  const handleChange = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    setUser({ ...user, [key]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      ...user,
      id: new Date().getTime().toString(),
    };
    dispatch({
      type: "ADD_USER",
      payload: { user: newUser, isEditing, editId },
    });
    setUser({ name: "", email: "", phone: "" });
    setEditId(null);
    setIsEditing(false);
    setImage(Image.create);
  };

  return (
    <div className="pt-14">
      <h1 className="text-3xl font-bold text-center">Add Users</h1>
      <div className="bg-white rounded-lg my-4 p-4 shadow-light border-light">
        <form onSubmit={handleSubmit}>
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
