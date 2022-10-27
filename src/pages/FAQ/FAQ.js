import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider";

const FAQ = () => {
  const { isDark } = useContext(AuthContext);
  return (
    <div className={`${isDark ? "" : "bg-slate-900"}`}>
      <div className="w-full px-5 md:px-0 md:w-3/4 lg:w-[600px] mx-auto">
        <h1 className="text-4xl text-slate-500 text-center pt-10">
          Frequently Asking Questions
        </h1>
        <div className="container mx-auto mt-10 grid grid-cols-1 gap-5 pb-10">
          <div
            className={`border text-2xl p-3 ${
              isDark ? "" : "border-sky-800 text-sky-700"
            }`}
          >
            <h1 className="text-2xl font-medium">
              What is the goal of DEV Learn?
            </h1>
            <hr className="border-sky-900 mt-3" />
            <p className="text-xl">
              Dev Learn's mission is to provide flexible, effective skill
              development to empower organizations and individuals. Dev Learn
              Business helps companies achieve critical business outcomes and
              stay competitive by offering engaging on-demand, immersive, and
              cohort-based learning.
            </p>
          </div>
          <div
            className={`border text-2xl p-3 ${
              isDark ? "" : "border-sky-800 text-sky-700"
            }`}
          >
            <h1 className="text-2xl font-medium">
              Is Dev Learn good for beginners?
            </h1>
            <hr className="border-sky-900 mt-3" />
            <p className="text-xl">
              The fact is that Dev Learn is open to everyone, it doesn't matter
              if you don't have any prior experience. In short, Dev Learn is
              good for: Professionals looking to gain skills. People looking for
              a career change.
            </p>
          </div>
          <div
            className={`border text-2xl p-3 ${
              isDark ? "" : "border-sky-800 text-sky-700"
            }`}
          >
            <h1 className="text-2xl font-medium">
              Can you get a job with a Dev Learn certificate?
            </h1>
            <hr className="border-sky-900 mt-3" />
            <p className="text-xl">
              Yes, you can get a job with a Dev Learn certificate. This is
              especially true if you are a student who is willing to put in the
              effort. Dev Learn certificates can help you gain relevant skills
              and knowledge that will help you in your job search, but they are
              not sufficient to obtain high-paying jobs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
