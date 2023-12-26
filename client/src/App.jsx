import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Layout from "./Layout/Layout";
import LoginPage from "./pages/LoginPage";

import Mainpage from "./pages/Mainpage";
import ExploerPage from './pages/ExploerPage'
import DiscussPage from './pages/DiscussPage'
import QnaPage from './pages/QnaPage'
import EventPage from './pages/EventPage'
``
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Mainpage /> },
      { path: "/login", element: <LoginPage /> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
