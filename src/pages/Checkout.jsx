import React from "react";
import { useNavigate } from "react-router-dom";
import CheckoutList from "../features/basket/CheckoutList";
import CheckoutSummary from "../features/basket/CheckoutSummary";

function Checkout() {
  const navigate = useNavigate();
  return (
    <div className="grid grid-cols-1 md:grid-cols-[1fr_20rem] grid-rows-[auto_auto]  gap-4">
      {/*  basket wrapper */}
      <div className="flex items-center justify-between">
        <p>سبد خرید </p>
        <button
          onClick={() => navigate("/products")}
          className="ring ring-slate-300 p-2 px-4 rounded-md transition-all duration-300 dark:bg-slate-300 hover:bg-slate-400"
        >
          فروشگاه
        </button>
      </div>
      <div className="col-start-1 col-end-2 ">
        {/* Detail */}

        {/* Basket */}

        <CheckoutList />
      </div>
      <div className=" dark:bg-slate-400  md:sticky md:top-0 -order-1  md:order-1 self-start bg-white p-2 rounded-md  col-span-1">
        <CheckoutSummary />
      </div>
    </div>
  );
}

export default Checkout;
