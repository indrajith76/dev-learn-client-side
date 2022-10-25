import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
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
      },
      {
        path: "/*",
        element: <ErrorPages></ErrorPages>,
      },
    ],
  },
]);
