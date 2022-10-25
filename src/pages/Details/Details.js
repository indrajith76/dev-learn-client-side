import React from "react";
import { useLoaderData, Link } from "react-router-dom";
import { FaUserCircle, FaStar, FaRegFilePdf } from "react-icons/fa";

const Details = () => {
  const course = useLoaderData();
  const { id, title, author, rating, price, videoLink } = course;
  return (
    <div className="container mx-auto mb-10">
      <div className="w-3/4 my-5 mx-auto flex justify-between items-center">
        <h1 className="text-4xl text-slate-800 font-semibold">
          Details of this course
        </h1>
        <button className="border-2 px-5 py-2 flex items-center gap-1 hover:shadow-lg rounded-md">
          <FaRegFilePdf></FaRegFilePdf> Download PDF
        </button>
      </div>
      <iframe
        className="w-3/4 h-[70vh] mx-auto"
        src={`${videoLink}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <div className="w-3/4 mx-auto">
        <h3 className="text-4xl font-bold my-3 text-slate-800">{title}</h3>
        <h4 className="text-2xl mt-8 font-medium text-slate-800 flex items-center gap-1">
          <span className="text-gray-600">
            <FaUserCircle />
          </span>
          Author : {author}
        </h4>
        <div className="mt-8 flex justify-between">
          <h4 className="text-3xl font-bold text-slate-800">
            Price : ${price}
          </h4>
          <p className="text-2xl font-bold text-slate-800 flex items-center gap-2">
            <span className="text-yellow-500">
              <FaStar />
            </span>{" "}
            {rating}
          </p>
        </div>
      </div>
      <div className="flex justify-center mt-10">
        <Link to={`/checkout/${id}`}>
          <button className="bg-red-500 w-full py-2 px-10 font-medium text-white rounded-lg">Get Premium Access</button>
        </Link>
      </div>
    </div>
  );
};

export default Details;
