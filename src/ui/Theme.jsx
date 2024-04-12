import { useEffect, useState } from "react";
import { FaRegMoon } from "react-icons/fa";
import { GoSun } from "react-icons/go";
function Theme() {
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    if (theme == "light") {
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    }
  }, [theme]);

  function toggleHandle() {
    if (theme === "light") setTheme("dark");
    else setTheme("light");
  }
  return (
    <button
      onClick={toggleHandle}
      className="theme-toggle rounded-full border flex items-center justify-center size-10"
    >
      {theme === "light" && <GoSun />}
      {theme === "dark" && <FaRegMoon />}
    </button>
  );
}

export default Theme;
