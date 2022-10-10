import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../ErrorPage";
import Home from "../Home";
import Products from "../Products";
import Root from "../Root/Root";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    loader: () => fetch("products.json"),
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/home",
        element: <Home></Home>,
      },
      {
        path: "/product",
        element: <Products></Products>,
      },
    ],
  },
]);
