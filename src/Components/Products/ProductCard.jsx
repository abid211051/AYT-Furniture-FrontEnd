import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <>
      <div className="w-72 h-[420px] glass group relative shadow-xl">
        <div className="flex items-center justify-center">
          <img
            src={product?.image}
            onError={({ currentTarget }) => {
              currentTarget.onerror = null; // prevents looping
              currentTarget.src = "public/error.png";
            }}
            alt=""
            className="h-48 object-contain"
          />
        </div>
        <div className=" flex flex-col justify-center items-center">
          <h2 className="text-xl">{product?.name}</h2>
          <p> {product?.description.slice(0, 30)}</p>
          <h3 className="text-lg font-semibold">Price</h3>
          <p className="text-lg mt-5">Start From</p>
          <p className="text-2xl">{product?.price}</p>
        </div>
        <Link
          to={`/single-product/${product._id}`}
          className="w-full flex items-center justify-center mt-6"
        >
          <button className="py-1 w-4/5 text-base font-semibold hidden group-hover:block bg-red-500 text-white">
            DETAILS
          </button>
        </Link>
      </div>
    </>
  );
};

export default ProductCard;
