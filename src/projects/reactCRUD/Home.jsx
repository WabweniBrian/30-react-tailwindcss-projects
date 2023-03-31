import React, { useState } from "react";
import { useEffect } from "react";
import Alert from "./components/Alert";
import Form from "./components/Form";
import Navbar from "./components/Navbar";
import UserList from "./components/UserList";
import { useUsersContext } from "./context/UsersContext";

const Home = () => {
  const [user, setUser] = useState({ name: "", email: "", phone: "" });
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);
  const {
    users,
    alert: { isAlertOpen },
  } = useUsersContext();

  const editUser = (id) => {
    const userToEdit = users.find((user) => user.id === id);
    setIsEditing(true);
    setEditId(userToEdit.id);
    setUser({
      name: userToEdit.name,
      email: userToEdit.email,
      phone: userToEdit.phone,
    });
  };

  useEffect(() => {
    localStorage.setItem("React-Users", JSON.stringify(users));
  }, [users]);

  return (
    <div className="min-h-screen bg-slate-100 text-slate-700 pb-10">
      <div className="w-[95%] md:w-[90%] mx-auto ">
        {isAlertOpen && <Alert />}
        <Navbar />
        <Form
          isEditing={isEditing}
          setIsEditing={setIsEditing}
          editId={editId}
          setEditId={setEditId}
          user={user}
          setUser={setUser}
        />
        <UserList editUser={editUser} />
      </div>
    </div>
  );
};

export default Home;
