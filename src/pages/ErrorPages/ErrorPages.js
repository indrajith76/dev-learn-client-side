import React from "react";
import Lottie from "lottie-react";
import errorImg from "../../asset/errorImg.json";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider";

const ErrorPages = () => {
  const { isDark } = useContext(AuthContext);
  return (
    <div className={isDark ? "":"bg-slate-900"}>
      <div className="w-3/4 mx-auto">
        <Lottie animationData={errorImg}></Lottie>
      </div>
      <h1 className="text-6xl font-bold text-slate-700 absolute bottom-16 left-0 right-0 text-center">
        Not Found!
      </h1>
    </div>
  );
};

export default ErrorPages;
