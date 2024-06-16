import { lazy } from "react";
import Loadable from "../components/Loadable";
import MainLayout from "../layouts/mainlayout";
const Overview = Loadable(lazy(() => import("../views/Overview")));
const ResultSearch = Loadable(lazy(() => import("../views/ResultSearch")));
const Detail = Loadable(lazy(() => import("../views/Detail")));

const MainRouter = {
  path: "/",
  element: <MainLayout />,
  children: [
    {
      path: "/trangchu",
      element: <Overview />,
    },
    {
      path: "/",
      children: [
        {
          path: "trangchu",
          element: <Overview />,
        },
      ],
    },
    {
      path: "tailieu",
      element: <Detail />,
    },
    {
      path: "timkiem",
      element: <ResultSearch />,
    },
  ],
};

export default MainRouter;
