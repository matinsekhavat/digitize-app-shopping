import React from "react";
import DeliveryList from "./DeliveryList";

function DeliveryStatus({ direction }) {
  return (
    <div className="  ">
      <DeliveryList direction={direction} />
    </div>
  );
}

export default DeliveryStatus;
