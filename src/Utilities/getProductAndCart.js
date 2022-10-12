import { getFromDb } from "../FakeDB/fakeDb";

const getCartAndProductData = async () => {
  const productsData = await fetch("products.json");
  const products = await productsData.json();

  const shoppingCart = getFromDb();
  const initialCart = [];
  for (const id in shoppingCart) {
    const addedProduct = products.find((product) => product.id === id);

    if (addedProduct) {
      let quantity = shoppingCart[id];
      addedProduct.quantity = quantity;
      initialCart.push(addedProduct);
    }
  }

  return { products, initialCart };
};

export { getCartAndProductData };
