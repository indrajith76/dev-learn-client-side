import React, { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useLoaderData, Link } from "react-router-dom";
import CourseCard from "../../components/CourseCard/CourseCard";
import { AuthContext } from "../../contexts/AuthProvider";

const Courses = () => {
  const [categories, setCategories] = useState([]);
  const coursesCategory = useLoaderData();
  const { isDark } = useContext(AuthContext);

  useEffect(() => {
    fetch("https://dev-learn-server-side.vercel.app/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div className={isDark ? "bg-white":"bg-slate-900"}>
      <div className={`${isDark ? "bg-white":"bg-slate-900"} sticky top-[76px] py-1 border-y ${isDark ? "":"border-sky-900 text-slate-300"} block md:hidden`}>
        <ul className="grid grid-cols-3 gap-1">
          {categories.map((category) => (
            <li className={`border ${isDark ? "":"border-sky-900"} text-center`} key={category.id}>
              <Link className="block" to={`/courses/${category.id}`}>
                {category.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex container mx-auto">
        <div className={`w-1/5 ${isDark ? "bg-slate-100":""} border-r ${isDark ? "border-slate-300":"border-sky-900"} hidden md:block`}>
          <ul>
            {categories.map((category) => (
              <li
                className={`${isDark ? "bg-white":"hover:shadow-lg hover:shadow-sky-900"} border border-r-0 my-2 py-2 pl-5 ml-5 text-lg font-medium ${isDark ? "text-slate-800 border-slate-300":"border-sky-900 text-slate-300"}`}
                key={category.id}
              >
                <Link className="block" to={`/courses/${category.id}`}>
                  {category.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:w-4/5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-10 py-10">
          {coursesCategory.map((course) => (
            <CourseCard key={course.id} course={course}></CourseCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;
