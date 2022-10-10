import React, { createContext } from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import Footer from "../Footer";
import Header from "../Header";

export const productContext = createContext();
const Root = () => {
  const products = useLoaderData();

  console.log(products);
  return (
    <div>
      <productContext.Provider value={products}>
        <Header></Header>
        <Outlet></Outlet>
        <Footer></Footer>
      </productContext.Provider>
    </div>
  );
};

export default Root;
