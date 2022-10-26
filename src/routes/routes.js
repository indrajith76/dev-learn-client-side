import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Checkout from "../pages/Checkout/Checkout";
import Courses from "../pages/Courses/Courses";
import Details from "../pages/Details/Details";
import ErrorPages from "../pages/ErrorPages/ErrorPages";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("https://dev-learn-server-side.vercel.app/courses"),
      },
      {
        path: "/courses",
        element: <Courses></Courses>,
        loader: () => fetch("https://dev-learn-server-side.vercel.app/courses"),
      },
      {
        path: "/courses/:categoryId",
        element: <Courses></Courses>,
        loader: ({ params }) =>
          fetch(
            `https://dev-learn-server-side.vercel.app/categories/${params.categoryId}`
          ),
      },
      {
        path: "/details/:courseId",
        element: <Details />,
        loader: ({ params }) =>
          fetch(
            `https://dev-learn-server-side.vercel.app/courses/${params.courseId}`
          ),
      },
      {
        path: "/checkout/:courseId",
        element: <Checkout />,
        loader: ({ params }) =>
          fetch(
            `https://dev-learn-server-side.vercel.app/courses/${params.courseId}`
          ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/*",
        element: <ErrorPages></ErrorPages>,
      },
    ],
  },
]);
