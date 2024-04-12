import React from "react";
import Toman from "../../ui/Toman";

function SummaryPrice({ title, price }) {
  return (
    <div className="flex items-center justify-between space-y-4">
      <p>{title}</p>
      <div className="flex items-center gap-2">
        <p className="text-green-600 dark:text-slate-900">{price}</p>
        {!!price && <Toman />}
      </div>
    </div>
  );
}

export default SummaryPrice;
