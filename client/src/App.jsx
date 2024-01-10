import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Layout from "./ui/Layout";

import ExploerPage, { loader as postsLoader } from "./pages/exploer";
import DiscussPage from "./pages/discuss";
import EventPage from "./pages/event";
import QnaPage from "./pages/qna";
import GroupPage from "./pages/group";
import SignupPage from "./pages/signup";

import Postdetail, {loader as postLoader} from "./pages/Postdetail";

import LoginPage from "./pages/login";
import Myinfo from "./pages/myinfo";
import UserInfo from "./pages/userinfo";
// import UserInfo, { loader as userLoader } from "./pages/userinfo";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      // 홈페이지, EXPLOER
      { path: "/", element: <ExploerPage />, loader: postsLoader },
      // { path: "/exploer", element: <ExploerPage /> },
      // DISCUSS
      { path: "/discuss", element: <DiscussPage /> },
      { path: "/discuss/:id", element: <Postdetail />, loader: postLoader  },
      // Q&A
      { path: "/qna", element: <QnaPage /> },
      { path: "/qna/:id", element: <Postdetail />, loader: postLoader },
      // EVENT
      { path: "/event", element: <EventPage /> },
      // EVENT
      { path: "/discuss", element: <EventPage /> },
      // EVENT
      { path: "/group", element: <GroupPage /> },

      // LOGIN
      { path: "/login", element: <LoginPage /> },

      // USER: INFO
      { path: "/myinfo", element: <UserInfo /> },
      { path: "/userinfo/:id", element: <UserInfo />},
      // { path: "/userinfo/:id", element: <UserInfo />, loader: userLoader },
    ],
  },
  {
    path: "/signup",
    element: <SignupPage/>
  }
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
