import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout";
import Home from "../components/reusable/home";
import Menu from "@/components/reusable/menu";
import Dashboard from "./dashboard";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        // landing page or home page
        path: "/home",
        element: <Home />,
        children: [],
      },
      {
        path: "/menu",
        element: <Menu />,
        children: [
          {
            path: "/dashboard",
            element: <Dashboard />,
          },
          {
            path: "/team",
            element: <Dashboard />,
          },
          {
            path: "/project",
            element: <Dashboard />,
          },
          {
            path: "/report",
            element: <Dashboard />,
          },
          {
            path: "/help",
            element: <Dashboard />,
          },
          {
            path: "/task",
            element: <Dashboard />,
          },
        ],
      },
    ],
  },
]);

export { Router };
