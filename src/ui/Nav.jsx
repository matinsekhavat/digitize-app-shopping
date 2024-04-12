import { FaHome } from "react-icons/fa";
import { BiSolidCategoryAlt } from "react-icons/bi";
import { IoBagHandle } from "react-icons/io5";
import { MdOutlineFavorite } from "react-icons/md";
import NavItem from "./NavItem";
import { Link } from "react-router-dom";
import { PiBasketThin } from "react-icons/pi";
import { useBasket } from "../Context/BasketProvider";

function Nav({ useFor }) {
  const { basket } = useBasket();
  //Mobile Datas
  const navList = [
    { icon: FaHome, title: "خانه", to: "/" },
    { icon: BiSolidCategoryAlt, title: "فروشگاه", to: "/products" },
    { icon: IoBagHandle, title: "سبدخرید", to: "/checkout" },
    { icon: MdOutlineFavorite, title: "علاقه مندی ها", to: "/wishlist" },
  ];

  return (
    <nav className="">
      {/* mobile Navigation */}
      {useFor === "mobile" && (
        <div className="fixed bottom-0 right-0 left-0 border-t-2 border-t-stone-300 sm:hidden  dark:text-slate-50">
          <ul className="flex justify-around items-center p-4 bg-white dark:bg-slate-800">
            {navList.map((nav) => (
              <NavItem nav={nav} key={crypto.randomUUID()} />
            ))}
          </ul>
        </div>
      )}

      {/* Desktop Navigation */}
      {useFor === "desktop" && (
        <ul className="flex items-center gap-3">
          {navList.map((nav) => (
            <Link
              to={nav.to}
              className="p-2 cursor-pointer hover:bg-stone-200 dark:hover:text-slate-950 rounded-md transition-all duration-200"
              key={crypto.randomUUID()}
            >
              {nav.title}
            </Link>
          ))}

          <Link to="/checkout" className="flex items-center gap-2">
            <span>سبد خرید</span>
            <span className="   text-xl ">{basket.length}</span>
          </Link>
        </ul>
      )}
    </nav>
  );
}

export default Nav;
