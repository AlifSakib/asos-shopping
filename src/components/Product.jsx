import React from "react";

const Product = ({ product }) => {
  const { img, name, price, ratings, seller } = product;
  return (
    <div>
      <a
        href="/"
        aria-label="View Item"
        className="inline-block overflow-hidden duration-300 transform bg-white rounded shadow-sm hover:-translate-y-2"
      >
        <div className="flex flex-col  md:h-[420px]">
          <img src={img} alt="" />
          <div className="flex-grow border border-t-0 rounded-b relative">
            <div className="p-5 mb-14  ">
              <h6 className="mb-2 font-semibold leading-5">{name}</h6>
              <p className="text-sm text-gray-900">Manufacture {seller}</p>
            </div>
            <div className="flex items-center space-x-2 ml-6 absolute bottom-10">
              <button className=" border-emerald-500 border-2 rounded-lg px-2 text-green-500 font-bold tracking-widest">
                ${price}.00
              </button>
            </div>
            <div className="absolute bottom-0 w-full">
              <button className="w-full bg-purple-600 py-1 text-white">
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default Product;
