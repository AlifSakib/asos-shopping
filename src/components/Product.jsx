import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Product = ({ product, addToCart }) => {
  const { img, name, price, seller, ratings } = product;

  return (
    <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl cursor-pointer ">
      <img
        className="object-cover w-full h-56 md:h-64 xl:h-80"
        src={img}
        alt=""
      />
      <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100 flex justify-center items-center flex-col space-y-1">
        <p className="mb-4 text-lg font-bold text-gray-100 font-lora">
          {name.slice(0, 15)}
        </p>
        <button className="text-sm tracking-wide text-gray-300 border-2 rounded-md px-5 border-yellow-500 ">
          {price}$
        </button>
        <p className="text-sm tracking-wide text-gray-300">
          Manufecture : {seller}
        </p>
        <p className="text-sm tracking-wide text-gray-300">
          Rating : {ratings}
        </p>
        <div className="w-10 h-10 bg-pink-500 flex items-center justify-center rounded-full absolute bottom-5 right-5 text-white hover:bg-white hover:text-pink-500">
          <button className="w-full" onClick={() => addToCart(product)}>
            <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
