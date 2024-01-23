import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Layout from "./ui/Layout";

import NewPost from "./feature/NewPost";
import EditPost, { loader as editPostLoader } from "./feature/EditPost";
import ExploerPage, { loader as postsLoader } from "./pages/exploer";
import SearchResult, {
  loader as searchresultLoader,
} from "./pages/searchResult";

import DiscussPage, { loader as discussesLoader } from "./pages/discuss";
import QnaPage, { loader as qnasLoader } from "./pages/qna";

import NewPage from "./pages/NewsPage";
import EventPage from "./pages/event";
import GroupPage from "./pages/group";
import SignupPage from "./pages/signup";

// import Postdetail from "./pages/Postdetail";
import Postdetail, { loader as postLoader } from "./pages/Postdetail";

import LoginPage from "./pages/login";
import Myinfo, { loader as myinfoLoader } from "./pages/myinfo";
import Error from "./pages/error";

import UserInfo, { loader as userLoader } from "./pages/userinfo";
import TestPage from "./pages/TestPage";

const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <Error />,
    children: [
      // 홈페이지
      // EXPLOER
      { path: "/", element: <ExploerPage />, loader: postsLoader },
      { path: "/write", element: <NewPost /> },
      { path: "/edit/:id", element: <EditPost />, loader: editPostLoader },
      {
        path: "/search/:id",
        element: <SearchResult />,
        loader: searchresultLoader,
      },
      // { path: "/exploer", element: <ExploerPage /> },
      // NEWS
      { path: "/news", element: <NewPage /> },
      // DISCUSS
      // { path: "/discuss", element: <DiscussPage />, loader: discussesLoader },
      {
        path: "/discuss/:id",
        element: <DiscussPage />,
        loader: discussesLoader,
      },
      {
        path: "/discuss/detail/:id",
        element: <Postdetail />,
        loader: postLoader,
      },
      // Q&A
      // { path: "/qna", element: <QnaPage />, loader: qnasLoader },
      { path: "/qna/:id", element: <QnaPage />, loader: qnasLoader },
      { path: "/qna/detail/:id", element: <Postdetail />, loader: postLoader },
      // EVENT
      { path: "/event", element: <EventPage /> },
      { path: "/event/:id", element: <Postdetail />, loader: postLoader },
      // GROUP
      { path: "/group", element: <GroupPage /> },
      { path: "/group/:id", element: <Postdetail />, loader: postLoader },
      // LOGIN
      { path: "/login", element: <LoginPage /> },
      // USER: INFO
      { path: "/userinfo/:id", element: <UserInfo />, loader: userLoader },
      // MY: INFO
      { path: "/myinfo", element: <Myinfo />, loader: myinfoLoader },
    ],
  },
  {
    path: "/signup",
    element: <SignupPage />,
  },
  {
    path: "/test",
    element: <TestPage />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
