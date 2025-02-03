import React, { useState } from "react";
import ProductCard from "./ProductCard";
import { GiWoodenChair } from "react-icons/gi";
import { LuSofa } from "react-icons/lu";
import { TbPlayerTrackNext, TbPlayerTrackPrev } from "react-icons/tb";
const Products = ({ products }) => {
  const [items, Setitems] = useState(products);
  const [visible, SetVisible] = useState(3);
  const showmore = () => {
    SetVisible((prev) => prev + 2);
  };
  const showless = () => {
    SetVisible((prev) => (prev > 2 ? prev - 2 : prev));
  };

  const allproduct = () => {
    Setitems(products);
  };
  const chairproduct = () => {
    const chair = products.filter((item) => item.category == "chair");
    Setitems(chair);
  };
  const sofaproduct = () => {
    const sofa = products.filter((item) => item.category == "sofa");
    Setitems(sofa);
  };
  return (
    <>
      <div id="product" className="my-5 font-sans">
        <div className="flex justify-between items-center flex-wrap">
          <h1 className="sm:text-5xl text-[13vw] font-bold mb-4">PRODUCTS</h1>
          <div className="mb-8 flex justify-center items-center flex-wrap gap-5">
            <button
              className=" duration-300 focus:text-orange-500 focus:border-orange-500 border-b-4"
              onClick={allproduct}
            >
              ALL Products
            </button>
            <button
              className="duration-200 focus:text-orange-500 focus:border-orange-500 flex justify-center items-center border-b-4"
              onClick={chairproduct}
            >
              <GiWoodenChair />
              Chairs
            </button>
            <button
              className="duration-200 focus:text-orange-500 focus:border-orange-500 flex justify-center items-center  border-b-4"
              onClick={sofaproduct}
            >
              <LuSofa />
              Sofa
            </button>
          </div>
        </div>
        <div className="flex flex-wrap justify-evenly gap-4">
          {items.slice(0, visible).map((product) => (
            <ProductCard key={product?._id} product={product} />
          ))}
        </div>
        <div className="flex justify-start items-center mt-8 gap-6 flex-wrap">
          <button
            className="text-base font-medium active:text-orange-500 active:border-orange-500 border-b-2 flex justify-center items-center gap-1"
            onClick={showmore}
          >
            <TbPlayerTrackNext />
            Show More
          </button>
          <button
            className="text-base font-medium active:text-orange-500 active:border-orange-500 border-b-2 flex justify-center items-center gap-1"
            onClick={showless}
          >
            <TbPlayerTrackPrev />
            Show Less
          </button>
        </div>
      </div>
    </>
  );
};

export default Products;
