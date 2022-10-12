const addToDb = (id) => {
  let shoppingCart = {};

  const storedCart = localStorage.getItem("shopping-cart");

  if (storedCart) {
    shoppingCart = JSON.parse(storedCart);
  }

  const quantity = shoppingCart[id];
  if (!quantity) {
    shoppingCart[id] = 1;
  } else {
    shoppingCart[id] = quantity + 1;
  }

  localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart));
};

const getFromDb = () => {
  let shoppingCart = {};

  const storedData = localStorage.getItem("shopping-cart");

  if (storedData) {
    shoppingCart = JSON.parse(storedData);
  }

  return shoppingCart;
};

export { addToDb, getFromDb };
