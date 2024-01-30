import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

import Layout from "./ui/Layout";

import NewPost from "./feature/NewPost";
import EditPost, { loader as editPostLoader } from "./feature/EditPost";
import ExplorePage, { loader as postsLoader } from "./pages/explore";
import SearchResultPage, {
  loader as searchresultLoader,
} from "./pages/searchResultPage";

import DiscussPage, { loader as discussesLoader } from "./pages/DiscussPage";
import QnaPage, { loader as qnasLoader } from "./pages/QnaPage";

import ArticlePage, { loader as articleLoader } from "./pages/ArticlePage";
import EventPage, { loader as eventLoader } from "./pages/EventPape";
// import Newevent  from "./feature/Newevent";

import GroupPage from "./pages/group";
// import SignupPage from "./pages/addinfo";

// import Postdetail from "./pages/Postdetail";
import PostdetailPage, { loader as postLoader } from "./pages/PostdetailPage";
import GroupdetailPage, {
  loader as groupLoader,
} from "./pages/GroupdetailPage";

import LoginPage from "./pages/LoginPage";
import MyinfoPage, { loader as myinfoLoader } from "./pages/MyinfoPage";
import NotFoundPage from "./pages/NotFoundPage";

import AddinfoPage from "./pages/AddinfoPage";
import UserinfoPage, { loader as userLoader } from "./pages/UserinfoPage";
import TestPage from "./pages/TestPage";

const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <NotFoundPage />,
    children: [
      // 홈페이지, EXPLORE ------------------------------------------
      {
        path: "/",
        element: <ExplorePage />,
        loader: postsLoader,
        children: [{ path: "write", element: <NewPost /> }],
      },

      { path: "/edit/:id", element: <EditPost />, loader: editPostLoader },
      {
        path: "/search/:id",
        element: <SearchResultPage />,
        loader: searchresultLoader,
      },
      // { path: "/explore", element: <ExplorePage /> },

      // DISCUSS ------------------------------------------
      {
        path: "/discuss/:id/",
        element: <DiscussPage />,
        loader: discussesLoader,
        children: [{ path: "write", element: <NewPost /> }],
      },
      {
        path: "/discuss/detail/:id",
        element: <PostdetailPage />,
        loader: postLoader,
      },

      // Q&A
      {
        path: "/qna/:id",
        element: <QnaPage />,
        loader: qnasLoader,
        children: [{ path: "write", element: <NewPost /> }],
      },
      {
        path: "/qna/detail/:id",
        element: <PostdetailPage />,
        loader: postLoader,
      },

      // Article ------------------------------------------
      {
        path: "/article",
        element: <ArticlePage />,
        loader: articleLoader,
        children: [{ path: "write", element: <NewPost /> }],
      },
      {
        path: "/Article/detail/:id",
        element: <PostdetailPage />,
        loader: postLoader,
      },

      // EVENT
      {
        path: "/event",
        element: <EventPage />,
        loader: eventLoader,
        children: [{ path: "write", element: <NewPost /> }],
      },
      {
        path: "/event/detail/:id",
        element: <PostdetailPage />,
        loader: postLoader,
      },
      // GROUP
      {
        path: "/group",
        element: <GroupPage />,
        children: [{ path: "write", element: <NewPost /> }],
      },
      {
        path: "/group/detail/:id",
        element: <GroupdetailPage />,
        loader: groupLoader,
      },
      // LOGIN
      { path: "/login", element: <LoginPage /> },
      { path: "/addinfo", element: <AddinfoPage /> },
      // USER: INFO
      { path: "/userinfo/:id", element: <UserinfoPage />, loader: userLoader },
      // MY: INFO
      { path: "/myinfo", element: <MyinfoPage />, loader: myinfoLoader },
      { path: "/myinfo/:id", element: <MyinfoPage />, loader: myinfoLoader },
    ],
  },
  {
    path: "/test",
    element: <TestPage />,
  },
]);

// ReactQuery Setup
const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />;
    </QueryClientProvider>
  );
};

export default App;
