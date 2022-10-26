import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex justify-center">
      <div className="w-3/4 md:w-1/2 lg:w-[35%] border border-sky-300 p-4 md:p-10 my-16 shadow-lg rounded">
        <h2 className="text-4xl text-center font-semibold text-sky-500 mb-7 mt-2">
          Login
        </h2>
        <form action="">
          <label className="block" htmlFor="email">
            Email
          </label>
          <input
            className="border-2 w-full h-9 my-4 pl-3 outline-sky-500"
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            required
          />
          <label className="block" htmlFor="password">
            Password
          </label>
          <input
            className="border-2 w-full h-9 my-4 pl-3 outline-sky-500"
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            required
          />
          <p>
            Forget password?{" "}
            <Link to="/" className="underline text-blue-700">
              Reset password
            </Link>
          </p>
          <button
            className="block mx-auto bg-sky-500 px-10 py-2 text-white font-semibold mt-5 mb-5 rounded-lg"
            type="submit"
          >
            Login
          </button>
        </form>
        <hr className="mb-3" />
        <p>
          Haven't account? <Link className="underline text-blue-700" to='/register'>Please Register</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
