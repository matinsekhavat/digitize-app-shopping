import { CiShop } from "react-icons/ci";
function DeliveryItem() {
  return (
    <li className="flex items-center gap-2">
      <p className="flex items-center ">
        <span>
          <CiShop />
        </span>
        <span>فروشنده:</span>
      </p>
      <span>دیجی تایز</span>
    </li>
  );
}

export default DeliveryItem;
