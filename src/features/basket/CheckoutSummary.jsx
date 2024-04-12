import React from "react";
import SummaryPrice from "./SummaryPrice";
import { useBasket } from "../../Context/BasketProvider";
import priceReducer from "../../utils/priceCalc";
import { e2p } from "../../utils/numConvertor";

function CheckoutSummary() {
  const { basket } = useBasket();

  return (
    <div className="">
      <SummaryPrice title="مجموع قیمت:" price={e2p(priceReducer(basket))} />
      <SummaryPrice title="تخفیف:" price={0} />
      <SummaryPrice title="قیمت نهایی:" price={e2p(priceReducer(basket))} />
    </div>
  );
}

export default CheckoutSummary;
