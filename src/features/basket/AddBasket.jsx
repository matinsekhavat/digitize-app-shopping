import React from "react";
import { e2p } from "../../utils/numConvertor";
import Toman from "../../ui/Toman";
import { useBasket } from "../../Context/BasketProvider";
import { useNavigate } from "react-router-dom";
function AddBasket({ price, data, isInProduct }) {
  const { addToBasket, basket } = useBasket();
  const navigate = useNavigate();
  return (
    <div className=" my-4 md:mb-0 text-center flex flex-col gap-2 font-vazirBold text-xl text-orange-700 dark:text-slate-800">
      <p className="flex  items-center justify-center gap-2 ">
        <span>{e2p(price)}</span>
        <span>{<Toman />}</span>
      </p>
      {isInProduct ? (
        <button
          onClick={() => navigate("/checkout")}
          className="bg-green-500 text-white  text-center py-2 px-4 w-full rounded-md"
        >
          به سبد خرید افزوده شد
        </button>
      ) : (
        <button
          onClick={() => addToBasket({ ...data, quantity: 1 })}
          className="bg-orange-500 text-white text-center py-2 px-4 w-full rounded-md"
        >
          اضافه به سبد خرید
        </button>
      )}
    </div>
  );
}

export default AddBasket;
