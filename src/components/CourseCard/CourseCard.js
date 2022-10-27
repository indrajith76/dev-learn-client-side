import React from "react";
import { useContext } from "react";
import { BsFillStarFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";

const CourseCard = ({ course }) => {
  const { isDark } = useContext(AuthContext);
  const { id, title, author, rating, basicPrice, thumbnail } = course;
  return (
    <div className={`border ${isDark ? "border-slate-300" :'border-sky-300'} p-5 rounded-lg shadow-lg ${!isDark && "hover:shadow-sky-900"}`}>
      <img className="w-full" src={thumbnail} alt="" />
      <div className="mt-3">
        <h5 title={title} className={`text-xl font-bold ${isDark ? "text-slate-700":"text-slate-400"}`}>{title.slice(0,40)}...</h5>
        <p className={`text-lg font-semibold my-1 ${isDark ? "text-slate-700":"text-slate-400"}`}>
          Author : {author}
        </p>
        <div className="flex justify-between text-xl mb-5">
          <p className={`text-3xl font-medium ${isDark ? "text-slate-700":"text-slate-400"}`}>
            Price ${basicPrice}
          </p>
          <p className={`flex items-center gap-1 font-medium ${isDark ? "text-slate-700":"text-slate-400"}`}>
            <span className="text-yellow-500">
              <BsFillStarFill />
            </span>
            {rating}
          </p>
        </div>
        <Link to={`/details/${id}`}>
          <button
            className={`${
              isDark ? "bg-slate-500 hover:bg-slate-600" : "bg-sky-500 hover:bg-sky-600"
            } w-full py-2 text-xl font-medium text-white rounded-lg duration-500`}
          >
            Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CourseCard;
