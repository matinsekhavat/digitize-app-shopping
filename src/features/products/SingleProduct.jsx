import React from "react";
import ColorGroup from "../../ui/ColorGroup";
import { e2p } from "../../utils/numConvertor";
import { Link } from "react-router-dom";
import Toman from "../../ui/Toman";
import { useFilter } from "../../Context/FilterProvider";

function SingleProduct({ product }) {
  const { selectedCategory } = useFilter();
  return (
    <div
      className="bg-white p-2 mt-2 rounded-md flex flex-col justify-between dark:bg-slate-500
    "
    >
      {/* product image */}
      <div className="relative   rounded-md ">
        <img
          src={product.imageSrc}
          alt="Apple watch"
          className="mx-auto relative h-40"
        />
        {/* <span className="absolute top-0">Hearrt</span> */}
      </div>

      {/*  product info */}
      <div className="flex justify-between items-center mt-4">
        <span>{product.faBrand}</span>
        {/* color Group */}
        <ColorGroup />
      </div>
      {/* Product Title */}
      <p className="sm:text-lg my-2">{product.name}</p>
      <p className="text-left text-orange-500 dark:text-slate-900 font-vazirBold flex items-center justify-end gap-2 ">
        <span>{e2p(product.price)}</span>
        <span className="text-stone-800">{<Toman />}</span>
      </p>

      {/* Show More Link */}
      <Link
        to={`/product/${selectedCategory}/${product.id}`}
        className="text-center pb-2 pt-4 border-t mt-4 font-bold text-lg block"
      >
        <span className="text-orange-400  dark:text-slate-950 font-vazirBold">
          مشاهده و سفارش
        </span>
      </Link>
    </div>
  );
}

export default SingleProduct;
