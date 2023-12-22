import { RouterProvider, createBrowserRouter } from "react-router-dom";

import NaviBar from "./Layout/NaviBar";
import Mainpage from "./pages/Mainpage";
import Login from "./pages/Login";

import "./App.module.scss";

const router = createBrowserRouter([
  {
    path: "/",
    element: <NaviBar />,
    children: [
      { path: "/", element: <Mainpage /> },
      { path: "/login", element: <Login /> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
