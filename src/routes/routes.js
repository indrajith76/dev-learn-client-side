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
        loader:()=> fetch('https://dev-learn-server-side.vercel.app/courses'),
      },
      {
        path: "/*",
        element: <ErrorPages></ErrorPages>,
      },
    ],
  },
]);
