import { useState } from "react";
import logo from "../../asset/logo.png";
import { Link, NavLink } from "react-router-dom";
import { BsCircleHalf } from "react-icons/bs";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider";
import ReactTooltip from 'react-tooltip';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logOut, isDark, setIsDark } = useContext(AuthContext);

  const handleSignOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.error(error));
  };

  const handleDarkMode = () => {
    setIsDark(!isDark);
  };

  return (
    <div
      className={`${
        isDark ? "bg-slate-100" : "bg-gray-900 shadow-sm shadow-sky-900"
      } sticky top-0 z-20`}
    >
      <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="relative flex items-center justify-between">
          <Link to="/" className="inline-flex items-center">
            <img className="w-32 lg:w-64" src={logo} alt="" />
          </Link>
          <ul className="flex items-center hidden space-x-8 lg:flex">
            <li>
              <NavLink
                to="/"
                style={({ isActive }) =>
                  isActive
                    ? { color: isDark ? "#00b0ff" : "#fb8b12" }
                    : { color: isDark ? "#1e2941" : "white" }
                }
                className="font-medium tracking-wide transition-colors duration-200"
                end
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/courses"
                style={({ isActive }) =>
                  isActive
                    ? { color: isDark ? "#00b0ff" : "#fb8b12" }
                    : { color: isDark ? "#1e2941" : "white" }
                }
                className="font-medium tracking-wide transition-colors duration-200"
              >
                Courses
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/faq"
                style={({ isActive }) =>
                  isActive
                    ? { color: isDark ? "#00b0ff" : "#fb8b12" }
                    : { color: isDark ? "#1e2941" : "white" }
                }
                className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
              >
                FAQ
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/blogs"
                style={({ isActive }) =>
                  isActive
                    ? { color: isDark ? "#00b0ff" : "#fb8b12" }
                    : { color: isDark ? "#1e2941" : "white" }
                }
                className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
              >
                Blogs
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                style={({ isActive }) =>
                  isActive
                    ? { color: isDark ? "#00b0ff" : "#fb8b12" }
                    : { color: isDark ? "#1e2941" : "white" }
                }
                className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
              >
                About us
              </NavLink>
            </li>
            <li>
              {user?.uid && user ? (
                <div className="flex items-center gap-7">
                  <Link to="/profile">
                    <img
                      className="w-10 rounded-full" 
                      data-tip={user.displayName}
                      src={user?.photoURL}
                      alt=""
                    />
                  </Link>
                  <ReactTooltip />
                  <button
                    onClick={handleSignOut}
                    className={`inline-flex items-center justify-center h-9 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md ${
                      isDark
                        ? "bg-slate-500 hover:bg-slate-600"
                        : "bg-sky-500 hover:bg-sky-600"
                    } focus:shadow-outline focus:outline-none`}
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <Link
                  to="/login"
                  className={`inline-flex items-center justify-center h-9 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md ${
                    isDark
                      ? "bg-slate-500 hover:bg-slate-600"
                      : "bg-sky-500 hover:bg-sky-600"
                  } focus:shadow-outline focus:outline-none`}
                >
                  Login
                </Link>
              )}
            </li>
            <li>
              <span
                onClick={handleDarkMode}
                className={`${
                  isDark ? "#1e2941" : "text-white"
                } cursor-pointer`}
              >
                <BsCircleHalf />
              </span>
            </li>
          </ul>
          <div className="lg:hidden">
            <button onClick={handleDarkMode} className="text-gray-400 mr-2">
              <BsCircleHalf />
            </button>
            <button
              aria-label="Open Menu"
              title="Open Menu"
              className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
              onClick={() => setIsMenuOpen(true)}
            >
              <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                />
                <path
                  fill="currentColor"
                  d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                />
                <path
                  fill="currentColor"
                  d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                />
              </svg>
            </button>
            {isMenuOpen && (
              <div className="absolute top-0 left-0 w-full z-20">
                <div
                  className={`p-5 ${
                    isDark ? "bg-slate-100" : "bg-gray-900"
                  } border rounded shadow-sm`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <Link to="/" className="inline-flex items-center">
                        <img className="w-40" src={logo} alt="" />
                      </Link>
                    </div>
                    <div>
                      <button
                        aria-label="Close Menu"
                        title="Close Menu"
                        className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <nav>
                    <ul className="space-y-4">
                      <li>
                        <Link
                          to="/"
                          aria-label="Our product"
                          title="Our product"
                          className="font-medium tracking-wide text-gray-600 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          Home
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/courses"
                          aria-label="Our product"
                          title="Our product"
                          className="font-medium tracking-wide text-gray-600 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          Courses
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/faq"
                          aria-label="Product pricing"
                          title="Product pricing"
                          className="font-medium tracking-wide text-gray-600 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          FAQ
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/blogs"
                          aria-label="About us"
                          title="About us"
                          className="font-medium tracking-wide text-gray-600 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          Blogs
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/about"
                          className="font-medium tracking-wide text-gray-600 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          About us
                        </Link>
                      </li>
                      <li>
                        {user?.uid && user ? (
                          <>
                            <Link to="/profile">
                              <img
                                className="w-10 rounded-full mb-5"
                                title={user.displayName}
                                src={user?.photoURL}
                                alt=""
                              />
                            </Link>
                            <div className="flex justify-center">
                              <button
                                onClick={handleSignOut}
                                className={`h-9 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md ${
                                  isDark
                                    ? "bg-slate-500 hover:bg-slate-600"
                                    : "bg-sky-500 hover:bg-sky-600"
                                } focus:shadow-outline focus:outline-none`}
                              >
                                Logout
                              </button>
                            </div>
                          </>
                        ) : (
                          <Link
                            to="/login"
                            className={`inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md ${
                              isDark
                                ? "bg-slate-500 hover:bg-slate-600"
                                : "bg-sky-500 hover:bg-sky-600"
                            } focus:shadow-outline focus:outline-none`}
                          >
                            Login
                          </Link>
                        )}
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
