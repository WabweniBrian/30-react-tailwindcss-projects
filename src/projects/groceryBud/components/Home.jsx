import React, { useEffect, useState } from "react";
import List from "./List";
import Alert from "./Alert";
import { useSelector, useDispatch } from "react-redux";
import { addUpdateItem, clearItems } from "../features/grocerySlice";

const Home = () => {
  const [itemName, setItemName] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [editID, setEditID] = useState("");
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.grocery);

  const newItemState = {
    items: {
      id: new Date().getTime().toString(),
      itemName,
    },
    isEditing,
    editID,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addUpdateItem(newItemState));
    setItemName("");
    setIsEditing(false);
    setEditID("");
  };

  const editItem = (id) => {
    const itemEdited = items.find((item) => item.id === id);
    setEditID(id);
    setIsEditing(true);
    setItemName(itemEdited.itemName);
  };

  // Add Items to localStorage
  useEffect(() => {
    localStorage.setItem("grocery-bud-redux", JSON.stringify(items));
  });

  return (
    <div className="min-h-screen bg-slate-100 pt-20 font-nunito">
      <Alert />
      <div className="max-w-[400px] w-[90%] mx-auto bg-white p-2 pb-4 shadow-normal">
        <h1 className="text-2xl text-center heading before:bg-purple-500">
          Grocery Bud
        </h1>
        {/* Form */}
        <form className="mt-4 flex" onSubmit={handleSubmit}>
          <input
            type="text"
            className="form-control rounded-none"
            placeholder="Enter item name..eg Eggs"
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
          />
          <button className="px-4 py-1 bg-purple-600 text-white hover:bg-purple-700 transition-a">
            {isEditing ? "Update" : "Submit"}
          </button>
        </form>
        {/* List */}
        <List editItem={editItem} />
        {items.length > 0 && (
          <button
            className="w-full border border-purple-600 py-1 my-2 text-purple-600 capitalize hover:bg-purple-700 transition-a hover:text-white"
            onClick={() => dispatch(clearItems())}
          >
            clear all
          </button>
        )}
      </div>
    </div>
  );
};

export default Home;
