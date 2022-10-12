import React, { useContext } from "react";
import { addToDb } from "../FakeDB/fakeDb";
import Product from "./Product";
import { CartContext, productContext } from "./Root/Root";

const Products = () => {
  const products = useContext(productContext);
  const [cart, setCart] = useContext(CartContext);
  const addToCart = (selectedProduct) => {
    let newCart = [];
    const exists = cart.find((item) => item.id === selectedProduct.id);
    console.log(exists);
    if (!exists) {
      selectedProduct.quantity = 1;
      newCart = [...cart, selectedProduct];
    } else {
      const remaining = cart.filter((item) => item.id !== selectedProduct.id);
      exists.quantity = exists.quantity + 1;
      newCart.push(...remaining, exists);
    }

    setCart(newCart);
    addToDb(selectedProduct.id);
  };

  return (
    <div>
      <div className="grid lg:grid-cols-6 md:grid-cols-3 gap-6 w-9/12 mx-auto">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            addToCart={addToCart}
          ></Product>
        ))}
      </div>
    </div>
  );
};

export default Products;
