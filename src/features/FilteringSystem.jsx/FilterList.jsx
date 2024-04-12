import { useState } from "react";
import { useFilter } from "../../Context/FilterProvider";
import FilterItem from "./FilterItem";
import ProductCategory from "./ProductCategory";
import Chevron from "../../ui/Chevron";

function FilterList({ filter }) {
  const { name, hasSub, subList } = filter;

  // Local component State

  const [isDropedDownOpen, setIsDropDownOpen] = useState(true);
  function handleDropDownMenu() {
    setIsDropDownOpen((prev) => !prev);
  }
  return (
    <div className="p-4">
      <div
        onClick={handleDropDownMenu}
        className={`w-max select-none  cursor-pointer flex items-center gap-4 ${
          !isDropedDownOpen ? "" : ""
        }`}
      >
        <span className="font-vazirBold text-orange-500">{name} </span>
        <Chevron isOpen={isDropedDownOpen} />
      </div>

      {isDropedDownOpen && (
        <div className="flex flex-col gap-4 mt-2">
          {hasSub &&
            subList.map((item) => (
              <FilterItem
                item={item}
                key={crypto.randomUUID()}
                isOpen={isDropedDownOpen}
              />
            ))}
        </div>
      )}
    </div>
  );
}

export default FilterList;
