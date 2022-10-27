import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider";
import { useLoaderData } from "react-router-dom";

const Blogs = () => {
  const { isDark } = useContext(AuthContext);
  const blogs = useLoaderData();
  return (
    <div className={`${isDark ? "" : "bg-slate-900"} py-10`}>
      <h1 className="text-center text-4xl text-orange-500 font-medium">
        Our Blogs
      </h1>

      <div className="container mx-auto mt-10 grid grid-cols-1 px-5 lg:grid-cols-2 gap-5">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className={`border text-2xl p-3 ${
              isDark ? "" : "border-sky-800 text-sky-700"
            }`}
          >
            <h1 className="text-2xl font-medium">{blog.title}</h1>
            <hr className="border-sky-900 mt-3" />
            <p className="text-xl">{blog.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
