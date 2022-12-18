import Home from "./pages/Home";

import React from 'react'
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/products/:category",
    element: <ProductList />,
  },
  {
    path: "/product/:id",
    element: <Product />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

const App = () => {
  const user = true;

  return (
    <RouterProvider router={router} />
  )
}

export default App