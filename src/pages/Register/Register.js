import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";

const Register = () => {
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;

    if (!/.{6}/.test(password)) {
      setError("(Password should be at least 6 characters.)");
      return;
    }

    if (!/.*[A-Z].*[A-Z]/.test(password)) {
      setError("(Password should have at least 2 Uppercase.)");
      return;
    }

    if (!/(?=.*[!@#$%^&*])/.test(password)) {
      setError("(Password should have at least 1 special character.)");
      return;
    }

    setError("");

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        handleUpdateUserProfile(name, photoURL);
        form.reset();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleUpdateUserProfile = (name, photoURL) => {
    const profile = {
      displayName: name,
      photoURL: photoURL,
    };
    updateUserProfile(profile)
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="flex justify-center">
      <div className="w-3/4 md:w-1/2 lg:w-[35%] border border-sky-300 p-4 md:p-10 my-16 shadow-lg rounded">
        <h2 className="text-4xl text-center font-semibold text-sky-500 mb-7 mt-2">
          Register
        </h2>
        <form onSubmit={handleSubmit}>
          <label className="block" htmlFor="name">
            Full Name
          </label>
          <input
            className="border-2 w-full h-9 my-4 pl-3 outline-sky-500"
            type="text"
            name="name"
            id="name"
            placeholder="Full Name"
            required
          />
          <label className="block" htmlFor="photoURL">
            Photo URL
          </label>
          <input
            className="border-2 w-full h-9 my-4 pl-3 outline-sky-500"
            type="text"
            name="photoURL"
            id="photoURL"
            placeholder="Photo URL"
            required
          />
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
            Password <small className="text-red-500">{error}</small>
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
            Register
          </button>
        </form>
        <hr className="mb-3" />
        <p>
          Have an account?
          <Link className="underline text-blue-700 ml-1" to="/login">
            Please Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
