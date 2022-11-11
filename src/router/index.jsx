import { createBrowserRouter } from "react-router-dom";

import LayoutRoot from "../Layout/LayoutRoot";
import LayoutPrivate from "../Layout/LayoutPrivate";

import Home from "../pages/Home";
import DashBoard from "../pages/DashBoard";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutRoot />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/dashboard",
        element: <LayoutPrivate />,
        children: [
          {
            index: true,
            element: <DashBoard />,
          },
        ],
      },
    ],
  },
]);
