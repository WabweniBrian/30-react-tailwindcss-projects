const Form = ({
  login,
  setLogin,
  handleChange,
  error,
  data,
  handleEmail,
  handleGoogle,
  handleGithub,
}) => {
  return (
    <div className="flex-center-center min-h-screen bg-yellow-50/50 text-[#4e4e3e]">
      <div className="max-w-[350px] w-[90%] shadow-normal p-4 bg-white rounded-lg">
        <h1 className="heading heading-auth text-xl">Create Account</h1>
        {error.isError && (
          <p className="text-center text-red-500">{error.message}</p>
        )}
        <div className="form-inputs">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            className="form-control mb-4 focus:border-yellow-500 rounded-full"
            placeholder="Email address.."
            value={data.email}
            onChange={handleChange}
          />
          <label htmlFor="email">Password</label>
          <input
            type="password"
            name="password"
            className="form-control focus:border-yellow-500 rounded-full"
            placeholder="Password.."
            value={data.password}
            onChange={handleChange}
          />
          <button
            className="w-full py-1 bg-yellow-500 text-white rounded-full my-4 hover:bg-yellow-600 transition-a"
            onClick={handleEmail}
          >
            {login ? "Login" : "Register"}
          </button>

          <h1 className="heading heading-auth text-sm before:w-full after:w-full">
            Or {login ? "Login" : "Register"} With
          </h1>
          <div className="flex-center-center gap-4 mt-2 cursor-pointer">
            <img
              src="./images/logos/google.png"
              alt=""
              width="30"
              onClick={handleGoogle}
            />
            <img
              src="./images/logos/github.png"
              alt=""
              width="30"
              onClick={handleGithub}
            />
          </div>
          <p className="text-center mt-3 cursor-pointer">
            {login ? "Don't" : "Already"} have an account?{" "}
            <span className="text-yellow-500" onClick={() => setLogin(!login)}>
              {login ? "Register" : "Login"}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Form;
