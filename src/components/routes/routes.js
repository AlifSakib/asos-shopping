import { createBrowserRouter } from "react-router-dom";
import { getCartAndProductData } from "../../Utilities/getProductAndCart";
import About from "../About";
import Cart from "../Cart";
import ErrorPage from "../ErrorPage";
import Home from "../Home";
import Login from "../Login";
import OrderReview from "../OrderReview";
import Products from "../Products";
import Root from "../Root/Root";
import Signup from "../Signup";
import Stacistics from "../Statistics";
import PrivateRoutes from "./PrivateRoutes";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    loader: getCartAndProductData,
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
        path: "/products",
        element: <Products></Products>,
      },
      {
        path: "/stats",
        element: <Stacistics></Stacistics>,
      },
      {
        path: "/order",
        element: (
          <PrivateRoutes>
            <OrderReview></OrderReview>
          </PrivateRoutes>
        ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/cart",
        element: <Cart></Cart>,
      },
    ],
  },
]);
