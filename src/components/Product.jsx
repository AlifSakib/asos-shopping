import React from "react";

const Product = ({ product, addToCart }) => {
  const { img, name, price, seller, ratings } = product;

  return (
    <div>
      <div className="flex flex-col  md:h-[400px] h-[550px]">
        <img src={img} alt="" />
        <div className="flex-grow border border-t-0 rounded-b relative">
          <div className="p-5 mb-14 space-y-3 ">
            <h6 className="mb-2 font-semibold leading-5">
              {name.slice(0, 15)}
            </h6>
            <button className=" border-emerald-500 border-2 rounded-lg px-2 text-green-500 font-bold tracking-widest ">
              ${price}.00
            </button>
          </div>
          <div className="text-start px-4 absolute bottom-10 ">
            <p className="text-sm text-gray-900">Manufacture : {seller}</p>
            <p className="text-sm text-gray-900">Rating : {ratings}</p>
          </div>
          <div className="absolute bottom-0 w-full">
            <button
              onClick={() => addToCart(product)}
              className="w-full bg-purple-600 py-1 text-white"
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
