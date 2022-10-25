import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Courses from "../pages/Courses/Courses";
import ErrorPages from "../pages/ErrorPages/ErrorPages";
import Home from "../pages/Home/Home";

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
        loader: () =>
          fetch('https://dev-learn-server-side.vercel.app/courses'),
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
        path: "/*",
        element: <ErrorPages></ErrorPages>,
      },
    ],
  },
]);
