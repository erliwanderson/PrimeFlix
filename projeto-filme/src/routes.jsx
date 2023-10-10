import { createBrowserRouter } from "react-router-dom";

import Home from "./pages/Home";
import Filme from "./pages/Filme";

import Layout from "./components/Layout";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/filme/:id",
        element: <Filme />,
      },
    ],
  },
]);

export { router };
