import Alert from "./components/Alert";
import Form from "./components/Form";
import Navbar from "./components/Navbar";
import UserList from "./components/UserList";
import { useUsersContext } from "./context/UsersContext";

const Home = () => {
  const { isAlertOpen } = useUsersContext();

  return (
    <div className="min-h-screen bg-slate-100 text-slate-700 pb-10">
      <div className="w-[95%] md:w-[90%] mx-auto ">
        {isAlertOpen && <Alert />}
        <Navbar />
        <Form />
        <UserList />
      </div>
    </div>
  );
};

export default Home;
