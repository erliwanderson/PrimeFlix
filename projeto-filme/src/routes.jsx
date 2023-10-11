import { createBrowserRouter } from "react-router-dom";

import Home from "./pages/Home";
import Filme from "./pages/Filme";
import Erro from "./pages/Error";
import Favoritos from "./pages/Favoritos";

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
      {
        path: "/favoritos",
        element: <Favoritos />,
      },
      {
        path: "*",
        element: <Erro />,
      },
    ],
  },
]);

export { router };
