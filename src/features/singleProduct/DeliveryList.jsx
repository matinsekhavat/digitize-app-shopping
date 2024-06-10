import React from "react";

import DeliveryItem from "./DeliveryItem";
function DeliveryList({ direction }) {
  return (
    <ul
      className={`mt-2 flex p-4 dark:bg-slate-900 rounded-md dark:text-slate-100 ${
        direction === "col" ? "flex-col flex-nowrap" : ""
      }flex-wrap gap-4 items-center justify-center`}
    >
      <DeliveryItem shop="w" />
      <DeliveryItem />
      <DeliveryItem />
    </ul>
  );
}

export default DeliveryList;
