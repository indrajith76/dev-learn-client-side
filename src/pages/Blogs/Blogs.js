import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider";

const Blogs = () => {
  const { isDark } = useContext(AuthContext);
  return (
    <div className={`${isDark ? "" : "bg-slate-900"} py-10`}>
      <h1 className="text-center text-4xl text-orange-500 font-medium">
        Our Blogs
      </h1>
      <div className="container mx-auto mt-10 grid grid-cols-1 px-5 lg:grid-cols-2 gap-5">
        <div
          className={`border text-2xl p-3 ${
            isDark ? "" : "border-sky-800 text-sky-700"
          }`}
        >
          <h1 className="text-2xl font-medium">what is cors?</h1>
          <hr className="border-sky-900 mt-3" />
          <p className='text-xl'>
            Cross-origin resource sharing is a mechanism that allows restricted
            resources on a web page to be requested from another domain outside
            the domain from which the first resource was served. A web page may
            freely embed cross-origin images, stylesheets, scripts, iframes, and
            videos.
          </p>
        </div>
        <div
          className={`border text-2xl p-3 ${
            isDark ? "" : "border-sky-800 text-sky-700"
          }`}
        >
          <h1 className="text-2xl font-medium">
            Why are you using firebase? What other options do you have to
            implement authentication?
          </h1>
          <hr className="border-sky-900 mt-3" />
          <p className='text-xl'>
            Firebase helps you develop high-quality apps, grow your user base,
            and earn more money. Each feature works independently, and they work
            even better together.
          </p>
          <ul className='text-xl'>
            <li>1. Single-Factor/Primary Authentication.</li>
            <li>2. Two-Factor Authentication (2FA)</li>
            <li>3. Single Sign-On (SSO)</li>
            <li>4. Multi-Factor Authentication (MFA)</li>
            <li>5. Password Authentication Protocol (PAP)</li>
          </ul>
        </div>
        <div
          className={`border text-2xl p-3 ${
            isDark ? "" : "border-sky-800 text-sky-700"
          }`}
        >
          <h1 className="text-2xl font-medium">How does the private route work?</h1>
          <hr className="border-sky-900 mt-3" />
          <p className='text-xl'>
            The react private route component renders child components (
            children ) if the user is logged in. If not logged in the user is
            redirected to the /login page with the return url passed in the
            location state property
          </p>
        </div>
        <div
          className={`border text-2xl p-3 ${
            isDark ? "" : "border-sky-800 text-sky-700"
          }`}
        >
          <h1 className="text-2xl font-medium">What is Node? How does Node work?</h1>
          <hr className="border-sky-900 mt-3" />
          <p className='text-xl'>
            Node.js is an open-source, cross-platform, back-end JavaScript
            runtime environment that runs on a JavaScript Engine and executes
            JavaScript code outside a web browser, which was designed to build
            scalable network applications.It is a used as backend service where
            javascript works on the server-side of the application. This way
            javascript is used on both frontend and backend. Node. js runs on
            chrome v8 engine which converts javascript code into machine code,
            it is highly scalable, lightweight, fast, and data-intensive
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
