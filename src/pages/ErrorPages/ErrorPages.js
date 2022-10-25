import React from "react";
import Lottie from "lottie-react";
import errorImg from "../../asset/errorImg.json";

const ErrorPages = () => {
    // document.body.style.background = 'black'
  return (
    <div>
      <div className="w-3/4 mx-auto">
        <Lottie animationData={errorImg}></Lottie>
      </div>
    </div>
  );
};

export default ErrorPages;
