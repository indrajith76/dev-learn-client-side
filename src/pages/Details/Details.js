import React from "react";
import { useLoaderData, Link } from "react-router-dom";
import { FaUserCircle, FaStar, FaRegFilePdf } from "react-icons/fa";
import { createRef } from "react";
import ReactToPdf from "react-to-pdf";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider";

const Details = () => {
  const course = useLoaderData();
  const { id, title, author, rating, basicPrice, videoLink } = course;
  const { isDark } = useContext(AuthContext);
  const ref = createRef();

  return (
    <div className={isDark ? "":"bg-slate-900"}>
      <div className="container mx-auto pb-10" ref={ref}>
      <div className="w-3/4 py-5 mx-auto flex flex-col md:flex-row justify-between items-center gap-3">
        <h1 className={`text-2xl md:text-4xl ${isDark ? "text-slate-800":"text-slate-300"} font-semibold`}>
          Details of this course
        </h1>
        <ReactToPdf
          targetRef={ref}
          filename="dev-learn.pdf"
          x={-30}
          y={0.5}
          scale={0.8}
        >
          {({ toPdf }) => (
            <button
              onClick={toPdf}
              className={`border-2 px-1 md:px-5 md:py-2 flex items-center gap-1 hover:shadow-lg rounded-md ${isDark ? "":"text-slate-500 border-slate-500"}`}
            >
              <FaRegFilePdf></FaRegFilePdf> Download PDF
            </button>
          )}
        </ReactToPdf>
      </div>
      <iframe
        ref={ref}
        className="md:w-3/4 md:h-[70vh] mx-auto"
        src={`${videoLink}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <div className="w-3/4 mx-auto">
        <h3 className={`text-xl md:text-4xl font-bold my-3 ${isDark ? "text-slate-800":"text-slate-300"}`}>{title}</h3>
        <h4 className={`md:text-2xl md:mt-8 font-medium ${isDark ? "text-slate-800":"text-slate-500"} flex items-center gap-1`}>
          <span className="text-gray-600">
            <FaUserCircle />
          </span>
          Author : {author}
        </h4>
        <div className="md:mt-8 flex justify-between">
          <h4 className={`text-lg md:text-3xl font-bold ${isDark ? "text-slate-800":"text-slate-500"}`}>
            Price : ${basicPrice}
          </h4>
          <p className={`md:text-2xl font-bold ${isDark ? "text-slate-800":"text-slate-500"} flex items-center gap-2`}>
            <span className="text-yellow-500">
              <FaStar />
            </span>{" "}
            {rating}
          </p>
        </div>
      </div>
      <div className="flex justify-center mt-10">
        <Link to={`/checkout/${id}`}>
          <button className="bg-red-500 w-full px-2 py-1 md:py-4 md:px-10 font-medium text-white rounded-lg text-xl">
            Get Premium Access
          </button>
        </Link>
      </div>
    </div>
    </div>
  );
};

export default Details;
