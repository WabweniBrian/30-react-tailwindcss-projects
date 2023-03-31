import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeItem } from "../features/grocerySlice";

const List = ({ editItem }) => {
  const dispatch = useDispatch();

  const { items } = useSelector((state) => state.grocery);

  return (
    <ul className="mt-4 px-4">
      {items.map((item) => {
        return (
          <li className="flex-center-between py-2 capitalize" key={item.id}>
            {item.itemName}{" "}
            <div className="icons">
              <i
                className="feather-edit cursor-pointer hover:text-green-600 mr-2"
                onClick={() => dispatch(editItem(item.id))}
              ></i>
              <i
                className="feather-delete cursor-pointer hover:text-red-600"
                onClick={() => dispatch(removeItem(item.id))}
              ></i>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default List;
