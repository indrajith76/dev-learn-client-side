import React from "react";
import { useLoaderData } from "react-router-dom";
import { BsCheck2, BsX, BsFillStarFill } from "react-icons/bs";

const Checkout = () => {
  const course = useLoaderData();
  const { id, title, author, rating, basicPrice, premiumPrice } = course;
  return (
    <div className="container mx-auto">
      <h1 className="text-center font-bold text-slate-800 text-4xl mt-3">
        Welcome <span className="text-sky-700">indra</span>, to the
        checkout page.
      </h1>
      <div className="md:w-3/4 lg:w-2/4 mx-auto mt-5 px-5 md:p-0">
        <h3 className="text-2xl mb-2">Course Name : {title}</h3>
        <div className="">
          <p>Author : {author}</p>
          <p className="flex items-center gap-1 mt-1">
            <span className="text-yellow-500">
              <BsFillStarFill />
            </span>
            {rating}
          </p>
        </div>
      </div>
      <div className="md:w-3/4 lg:w-2/4 mx-auto my-10 grid px-5 md:px-0 md:grid-cols-2 gap-5">
        <div className="border rounded-lg">
          <h3 className="bg-sky-500 text-center text-3xl text-slate-200 py-1 rounded-t-lg">
            Basic ${basicPrice}
          </h3>
          <ul className="p-3">
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
            <button className="hover:bg-sky-400 px-8 py-1 border-2 duration-500 rounded-lg font-medium text-slate-700 hover:text-white">
              Enroll Now
            </button>
          </div>
        </div>
        <div className="border rounded-lg">
          <h3 className="bg-sky-500 text-center text-3xl text-slate-200 py-1 rounded-t-lg">
            Premium ${premiumPrice}
          </h3>
          <ul className="p-3">
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
            <button className="hover:bg-sky-400 px-8 py-1 border-2 duration-500 rounded-lg font-medium text-slate-700 hover:text-white">
              Enroll Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
