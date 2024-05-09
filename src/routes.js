import React from "react";

const HomePage = React.lazy(() => import("./pages/HomePage"));

const routes = [
  {
    type: "collapse",
    name: "home-page",
    key: "home-page",
    route: "/",
    parentId: "Home",
    module: "HomePage",
    component: <HomePage />,
  },
  //   {
  //     type: "collapse",
  //     name: "home-page",
  //     key: "home-page",
  //     route: "/shop",
  //     parentId: "Home",
  //     module: "HomePage",
  //     component: <HomePage />,
  //   },

  //   {
  //     type: "collapse",
  //     name: "home-page",
  //     key: "home-page",
  //     route: "/home",
  //     parentId: "Home",
  //     module: "HomePage",
  //     component: <HomePage />,
  //   },

  //   {
  //     type: "collapse",
  //     name: "home-page",
  //     key: "home-page",
  //     route: "/home",
  //     parentId: "Home",
  //     module: "HomePage",
  //     component: <HomePage />,
  //   },
];
export default routes;
