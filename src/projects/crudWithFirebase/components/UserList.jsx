import React from "react";
import { useUsersContext } from "../context/UsersContext";

const UserList = ({ editUser }) => {
  const { users } = useUsersContext();
  const { dispatch } = useUsersContext();

  return (
    <div className="table-wrapper w-full bg-white shadow p-4 rounded-lg overflow-auto">
      <table className="text-[#717382] w-full border border-[#d6dcee]">
        <thead>
          <tr className="table-row">
            <th className="py-2 px-4 text-left font-extrabold">#ID</th>
            <th className="py-2 px-4 text-left font-extrabold">Name</th>
            <th className="py-2 px-4 text-left font-extrabold">Email</th>
            <th className="py-2 px-4 text-left font-extrabold">Phone</th>
            <th className="py-2 px-4 text-left font-extrabold">Action</th>
          </tr>
        </thead>
        <tbody>
          {users?.map((user) => {
            const { id, name, email, phone } = user;
            return (
              <tr className="table-row" key={id}>
                <td className="p-3">
                  <img
                    src="./images/person_1.jpg"
                    alt=""
                    className="w-8 h-8 rounded-full"
                  />
                </td>
                <td className="p-3">{name}</td>
                <td className="p-3">{email}</td>
                <td className="p-3">{phone}</td>
                <td className="text-center cursor-pointer px-2">
                  <i
                    className="feather-edit text-blue-600 hover:text-blue-800"
                    onClick={() => editUser(id)}
                  ></i>
                  <i
                    className="feather-trash text-red-600 ml-2 hover:text-red-800"
                    onClick={() =>
                      dispatch({ type: "REMOVE_USER", payload: id })
                    }
                  ></i>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {users.length < 1 && (
        <div className="p-2 border-x border-b">
          <h1 className="text-bold text-center text-2xl text-slate-500">
            No Users
          </h1>
        </div>
      )}
    </div>
  );
};

export default UserList;
