import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Layout from "./Layout/Layout";
import LoginPage from "./pages/login";

import Mainpage from "./pages/Mainpage";
import ExploerPage from "./pages/ExploerPage";
import DiscussPage from "./pages/DiscussPage";
import QnaPage from "./pages/QnaPage";
import EventPage from "./pages/EventPage";
``;
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      // 홈페이지
      { path: "/", element: <Mainpage /> },
      { path: "/exploer", element: <ExploerPage /> },
      { path: "/discuss", element: <DiscussPage /> },
      { path: "/qna", element: <QnaPage /> },
      { path: "/evnet", element: <EventPage /> },
      // 로그인페이지
      { path: "/login", element: <LoginPage /> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
