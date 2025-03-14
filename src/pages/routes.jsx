import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout";
import Header from "../components/reusable/header";
import Home from "../components/reusable/home";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/header",
        element: <Header />,
      },
    ],
  },
]);

export { Router };
