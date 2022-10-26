import React, { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useLoaderData, Link } from "react-router-dom";
import CourseCard from "../../components/CourseCard/CourseCard";

const Courses = () => {
  const [categories, setCategories] = useState([]);
  const coursesCategory = useLoaderData();

  useEffect(() => {
    fetch("https://dev-learn-server-side.vercel.app/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <>
      <div className="bg-white sticky top-[76px] py-1 border block md:hidden">
        <ul className="grid grid-cols-3 gap-1">
          {categories.map((category) => (
            <li className="border text-center" key={category.id}>
              <Link className="block" to={`/courses/${category.id}`}>
                {category.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex container mx-auto">
        <div className="w-1/5 bg-white border-r hidden md:block">
          <ul>
            {categories.map((category) => (
              <li
                className="bg-white border border-r-0 my-2 py-2 pl-5 ml-5 text-lg font-medium text-slate-800"
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
    </>
  );
};

export default Courses;
