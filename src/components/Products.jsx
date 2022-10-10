import React, { useContext } from "react";
import Product from "./Product";
import { productContext } from "./Root/Root";

const Products = () => {
  const products = useContext(productContext);
  return (
    <div>
      <div className="grid lg:grid-cols-6 md:grid-cols-3 gap-6 w-9/12 mx-auto">
        {products.map((product) => (
          <Product key={product.id} product={product}></Product>
        ))}
      </div>
    </div>
  );
};

export default Products;
