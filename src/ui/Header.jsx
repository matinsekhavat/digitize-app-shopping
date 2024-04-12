import { FaMagnifyingGlass } from "react-icons/fa6";
import Logo from "./Logo";
import Nav from "./Nav";
import Theme from "./Theme";
function Header() {
  return (
    <header className=" bg-white px-4 py-2 dark:bg-slate-700 dark:text-slate-50">
      {/* Mobile Design  */}

      <div className="flex justify-between items-center min-h-16 md:hidden ">
        <Logo />
        {/* Location params */}

        <p>خانه اصلی</p>
        <div className="flex items-center gap-2">
          <Theme />
          <div className="bg-slate-200 rounded-md p-2 dark:text-slate-900">
            <FaMagnifyingGlass />
          </div>
        </div>
      </div>

      {/* Desktop Design */}
      <div className="   hidden min-h-16 md:flex md:justify-between items-center">
        <div className="flex items-center gap-8">
          <Logo />
          <Nav useFor="desktop" />
        </div>
        {/* SearchBar */}
        <div className="flex items-center gap-8">
          <Theme />

          <div className="flex items-center gap-2 bg-stone-100 px-2 rounded-md transition-all duration-500 ">
            <span className="dark:text-slate-800">
              <FaMagnifyingGlass />
            </span>
            <input
              type="text"
              placeholder="نام محصول برند یا رنگ..."
              className="bg-transparent p-2 outline-none w-9 focus:w-56 transition-all duration-500  "
            />
          </div>
        </div>
      </div>

      {/* Nav Sticky */}
      {/* <Nav useFor="mobile" /> */}
    </header>
  );
}

export default Header;
