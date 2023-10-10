import { createBrowserRouter } from "react-router-dom";

import Home from "./pages/Home";
import Filme from "./pages/Filme";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/filme",
    element: <Filme />,
  },
]);

export { router };
