import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../contexts/AuthProvider";
import { BsGoogle, BsFacebook, BsGithub } from "react-icons/bs";
import {
  FacebookAuthProvider,
  GithubAuthProvider,
  GoogleAuthProvider,
} from "firebase/auth";

const Login = () => {
  const { signIn, signInPopUp, resetPassword,isDark } = useContext(AuthContext);
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";

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
        navigate(from, { replace: true });
      })
      .catch((error) => {
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
        navigate(from, { replace: true });
      })
      .catch((error) => console.error(error));
  };

  const handleFacebookSignIn = () => {
    signInPopUp(facebookProvider)
      .then((result) => {
        const user = result.user;
        navigate(from, { replace: true });
      })
      .catch((error) => console.error(error));
  };

  const handleGithubSignIn = () => {
    signInPopUp(githubProvider)
      .then((result) => {
        const user = result.user;
        navigate(from, { replace: true });
      })
      .catch((error) => console.error(error));
  };

  const handleModal = async () => {
    const { value: email } = await Swal.fire({
      title: "Input email address",
      input: "email",
      inputLabel: "Your email address",
      inputPlaceholder: "Enter your email address",
    });

    resetPassword(email)
      .then(() => {
        Swal.fire(
          "Password Reset successfully!", 
          "Please check your email.", 
          "success"
          );
      })
      .catch(() => {
        Swal.fire(`Failed Reset password`);
      });
  };

  return (
    <div className={`flex justify-center relative ${isDark ? "":"bg-slate-900"}`}>
      <div className={`w-[85%] md:w-1/2 lg:w-[500px] border ${isDark ? "border-sky-300":"border-sky-900 shadow-sky-900"} p-5 md:p-10 my-16 shadow-lg rounded`}>
        <h2 className="text-4xl text-center font-semibold text-sky-500 mb-7 mt-2">
          Login
        </h2>
        <form onSubmit={handleSubmit}>
          <label className="block text-slate-600" htmlFor="email">
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
          <label className="block text-slate-600" htmlFor="password">
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
          <button
            className="block mx-auto bg-sky-500 px-10 py-2 text-white font-semibold mt-5 mb-5 rounded-lg"
            type="submit"
          >
            Login
          </button>
        </form>
        <p className=" text-slate-600 mb-5">
          Forget password?
          <button onClick={handleModal} className="underline text-blue-700">
            Reset password
          </button>
        </p>
        <hr className="mb-3" />
        <p className="my-4 text-slate-600">
          Haven't account?
          <Link className="underline text-blue-700 ml-1" to="/register">
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
