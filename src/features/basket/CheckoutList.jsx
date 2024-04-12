import React from "react";
import CheckoutItem from "./CheckoutItem";
import { useBasket } from "../../Context/BasketProvider";

function CheckoutList() {
  const { basket } = useBasket();
  return (
    <div className="flex flex-col divide-y-2 bg-white p-4 my-4 md:my-0 rounded-md dark:bg-slate-400 ">
      {!basket.length && <p className="text-xl">سبد خرید شما خالی است</p>}
      {basket.map((product) => (
        <CheckoutItem key={product?.id} product={product} />
      ))}
    </div>
  );
}

export default CheckoutList;
