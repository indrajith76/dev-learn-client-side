import "./App.css";
import { RouterProvider } from "react-router-dom";
import { routes } from "./routes/routes";

function App() {
  return (
    <div className="select-none">
      <RouterProvider router={routes}></RouterProvider>
    </div>
  );
}

export default App;
