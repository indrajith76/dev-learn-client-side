import React from "react";
import { useLoaderData } from "react-router-dom";
import { BsCheck2, BsX, BsFillStarFill } from "react-icons/bs";
import { useState } from "react";
import Swal from "sweetalert2";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider";

const Checkout = () => {
  const { user,isDark } = useContext(AuthContext);
  const course = useLoaderData();
  const { id, title, author, rating, basicPrice, premiumPrice, thumbnail } =
    course;
  const [enroll, setEnroll] = useState(false);
  const [enrollBasic, setEnrollBasic] = useState(false);
  const [enrollPremium, setEnrollPremium] = useState(false);

  const handleBasicPrice = () => {
    Swal.fire({
      title: "You Successfully enrolled",
      text: "Course Name : " + title,
      imageUrl: thumbnail,
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: "Custom image",
    });
    setEnroll(true);
    setEnrollBasic(true);
  };

  const handlePremiumPrice = () => {
    Swal.fire({
      title: "You Successfully enrolled",
      text: "Course Name : " + title,
      imageUrl: thumbnail,
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: "Custom image",
    });
    setEnroll(true);
    setEnrollPremium(true);
  };

  return (
    <div className={isDark ? "":"bg-slate-900"}>
      <div className="container mx-auto">
      <h1 className={`text-center font-bold ${isDark ? "text-slate-800":"text-slate-400"} text-xl md:text-4xl pt-3`}>
        Welcome <span className="text-sky-700">{user?.displayName}</span>, to the
        checkout page.
      </h1>
      <div className="md:w-3/4 lg:w-2/4 mx-auto mt-5 px-5 md:p-0">
        <img className="w-full" src={thumbnail} alt="" />
        <h3 className={`text-lg md:text-2xl mb-2 ${isDark ? "text-slate-800":"text-slate-300"}`}>Course Name : {title}</h3>
        <div className="">
          <p className={isDark ? "text-slate-800":"text-slate-300"}>Author : {author}</p>
          <p className={`flex items-center gap-1 mt-1 ${isDark ? "text-slate-800":"text-slate-300"}`}>
            <span className="text-yellow-500">
              <BsFillStarFill />
            </span>
            {rating}
          </p>
        </div>
      </div>
      <div
        className="md:w-3/4 lg:w-2/4 mx-auto py-10 grid px-5 md:px-0 md:grid-cols-2 gap-5"
        style={{ pointerEvents: enroll ? "none" : "" }}
      >
        <div className={`border rounded-lg ${isDark ? "hover:shadow-lg":"border-sky-800 shadow-lg hover:shadow-sky-900"}`}>
          <h3 className="bg-sky-500 text-center text-3xl text-slate-200 py-1 rounded-t-lg">
            Basic ${basicPrice}
          </h3>
          <ul className={`p-3 ${isDark ? "text-slate-800":"text-slate-300"}`}>
            <li className="text-base flex items-center gap-1 mb-2">
              <BsCheck2 className="text-xl" />
              Watch videos.
            </li>
            <li className="text-base flex items-center gap-1 mb-2">
              <BsCheck2 className="text-xl" />
              Get certification.
            </li>
            <li className="text-base flex items-center gap-1 mb-2">
              <BsX className="text-2xl" />
              No Support session.
            </li>
            <li className="text-base flex items-center gap-1 mb-2">
              <BsCheck2 className="text-xl" />
              Learn with projects.
            </li>
            <li className="text-base flex items-center gap-1 mb-2">
              <BsX className="text-2xl" />
              No jobs programs.
            </li>
          </ul>
          <div className="flex justify-center mb-5 mt-5">
            <button
              onClick={handleBasicPrice}
              disabled={enrollBasic}
              className={`hover:bg-sky-600 disabled:bg-sky-600 ${isDark ? "text-slate-700":"text-slate-300"} px-8 py-1 border-2 duration-500 rounded-lg font-medium hover:text-white disabled:text-white`}
            >
              {enrollBasic ? "Enrolled" : "Enroll Now"}
            </button>
          </div>
        </div>
        <div className={`border rounded-lg ${isDark ? "hover:shadow-lg":"border-sky-800 shadow-lg hover:shadow-sky-900"}`}>
          <h3 className="bg-sky-500 text-center text-3xl text-slate-200 py-1 rounded-t-lg">
            Premium ${premiumPrice}
          </h3>
          <ul className={`p-3 ${isDark ? "text-slate-800":"text-slate-300"}`}>
            <li className="text-base flex items-center gap-1 mb-2">
              <BsCheck2 className="text-xl" />
              Watch videos.
            </li>
            <li className="text-base flex items-center gap-1 mb-2">
              <BsCheck2 className="text-xl" />
              Get certification.
            </li>
            <li className="text-base flex items-center gap-1 mb-2">
              <BsCheck2 className="text-xl" />
              Join Support session.
            </li>
            <li className="text-base flex items-center gap-1 mb-2">
              <BsCheck2 className="text-xl" />
              Learn with projects.
            </li>
            <li className="text-base flex items-center gap-1 mb-2">
              <BsCheck2 className="text-xl" />
              Join jobs programs.
            </li>
          </ul>
          <div className="flex justify-center mb-5 mt-5">
            <button
              onClick={handlePremiumPrice}
              disabled={enrollPremium}
              className={`hover:bg-sky-600 disabled:bg-sky-600 ${isDark ? "text-slate-700":"text-slate-300"} px-8 py-1 border-2 duration-500 rounded-lg font-medium hover:text-white disabled:text-white`}
            >
              {enrollPremium ? "Enrolled" : "Enroll Now"}
            </button>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Checkout;
