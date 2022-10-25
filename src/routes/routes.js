import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import ErrorPages from "../pages/ErrorPages/ErrorPages";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
        {
            path:'/*',
            element:<ErrorPages></ErrorPages>
        }
    ]
  },
]);
