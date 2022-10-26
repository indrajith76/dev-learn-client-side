import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../contexts/AuthProvider";
import { BsGoogle, BsFacebook, BsGithub } from "react-icons/bs";
import {
  FacebookAuthProvider,
  GithubAuthProvider,
  GoogleAuthProvider,
} from "firebase/auth";

const Login = () => {
  const { signIn, signInPopUp } = useContext(AuthContext);
  const [error, setError] = useState("");

  const googleProvider = new GoogleAuthProvider();
  const facebookProvider = new FacebookAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then((result) => {
        const user = result.user;
        form.reset();
        setError("");
      })
      .catch((error) => {
        console.log(error);
        const errorMessage = error.message.slice(22, error.message.length - 2);
        setError(errorMessage);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: errorMessage,
        });
      });
  };

  const handleGoogleSignIn = () => {
    signInPopUp(googleProvider)
      .then((result) => {
        const user = result.user;
      })
      .catch((error) => console.error(error));
  };

  const handleFacebookSignIn = () => {
    signInPopUp(facebookProvider)
      .then((result) => {
        const user = result.user;
      })
      .catch((error) => console.error(error));
  };

  const handleGithubSignIn = () => {
    signInPopUp(githubProvider)
      .then((result) => {
        const user = result.user;
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="flex justify-center">
      <div className="w-3/4 md:w-1/2 lg:w-[35%] border border-sky-300 p-4 md:p-10 my-16 shadow-lg rounded">
        <h2 className="text-4xl text-center font-semibold text-sky-500 mb-7 mt-2">
          Login
        </h2>
        <form onSubmit={handleSubmit}>
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
            Password <small className="text-red-500">{`${error}`}</small>
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
          Haven't account?
          <Link className="underline text-blue-700" to="/register">
            Please Register
          </Link>
        </p>
        <fieldset className="border mt-1 border-sky-200">
          <legend className="text-center text-slate-600">Sign In with</legend>
          <div className="flex justify-center gap-10 text-2xl my-3 text-slate-600">
            <button onClick={handleGoogleSignIn}>
              <BsGoogle />
            </button>
            <button onClick={handleFacebookSignIn}>
              <BsFacebook />
            </button>
            <button onClick={handleGithubSignIn}>
              <BsGithub />
            </button>
          </div>
        </fieldset>
      </div>
    </div>
  );
};

export default Login;
