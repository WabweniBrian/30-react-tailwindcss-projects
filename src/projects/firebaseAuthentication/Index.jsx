import { useEffect, useState } from "react";
import Form from "./Form";
import { app } from "../../firebaseConfig";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  GithubAuthProvider,
} from "firebase/auth";
import Home from "./Home";

const Index = () => {
  const [login, setLogin] = useState(true);
  const [userToken, setUserToken] = useState("");
  const [error, setError] = useState({ isError: false, message: "" });
  const [data, setData] = useState({ email: "", password: "" });
  let auth = getAuth();

  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  // -------------------SING IN WITH EMAIL AND PASSWORD -----------------------------
  const handleEmail = () => {
    if (login) {
      signInWithEmailAndPassword(auth, data.email, data.password)
        .then((userCredential) => {
          const { user } = userCredential;
          sessionStorage.setItem("UserToken", user.accessToken);
          setUserToken(user.accessToken);

          setLogin(false);
        })
        .catch((error) => {
          console.log(error.message);
          setError({ ...error, isError: true, message: "Invalid credentials" });
        });
    } else {
      createUserWithEmailAndPassword(auth, data.email, data.password)
        .then((userCredential) => {
          const { user } = userCredential;
          sessionStorage.setItem("UserToken", user.accessToken);
          setUserToken(user.accessToken);

          setLogin(false);
        })
        .catch((error) => {
          console.log(error.message);
          setError({
            ...error,
            isError: true,
            message: "Email address already exists",
          });
        });
    }
  };

  // -------------------SING IN WITH GOOGLE -----------------------------------------
  const handleGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then((userCredential) => {
        const { user } = userCredential;
        sessionStorage.setItem("UserToken", user.accessToken);
        setUserToken(user.accessToken);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  // -------------------SING IN WITH GITHUB -----------------------------------------
  const handleGithub = () => {
    signInWithPopup(auth, githubProvider)
      .then((userCredential) => {
        const { user } = userCredential;
        sessionStorage.setItem("UserToken", user.accessToken);
        setUserToken(user.accessToken);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  useEffect(() => {
    const _token = sessionStorage.getItem("UserToken");
    setUserToken(_token);
  }, [userToken]);

  return (
    <>
      {!userToken ? (
        <Form
          login={login}
          setLogin={setLogin}
          handleChange={handleChange}
          data={data}
          handleEmail={handleEmail}
          handleGoogle={handleGoogle}
          handleGithub={handleGithub}
          error={error}
        />
      ) : (
        <Home />
      )}
    </>
  );
};

export default Index;
