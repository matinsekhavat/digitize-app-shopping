import { Link } from "react-router-dom";
import { useBasket } from "../Context/BasketProvider";

function NavItem({ nav }) {
  const { basket } = useBasket();
  return (
    <Link
      to={nav.to}
      className="text-3xl cursor-pointer hover:drop-shadow-nav relative "
    >
      {<nav.icon />}
      {nav.title == "سبدخرید" && (
        <span className="absolute -left-2 -top-2 size-6 flex items-center justify-center text-sm p-1 bg-red text-white bg-red-500 rounded-full ">
          {basket.length}
        </span>
      )}
    </Link>
  );
}

export default NavItem;
